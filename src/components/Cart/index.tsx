import { useMemo, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { close, remove, clear } from '../../store/reducers/cart'

import { API_ENDPOINTS } from '../../constants/api'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  buildCheckoutPayload,
  type CheckoutFormFieldName,
  type CheckoutFormValues
} from '../../types/checkout'
import {
  CartStepSection,
  DeliveryStepSection,
  PaymentStepSection,
  ConfirmationStepSection
} from './sections'

import { CartContainer, Overlay, Sidebar, ErrorMessage } from './styles'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

const initialValues: CheckoutFormValues = {
  step: 'delivery',
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: '',
  cardName: '',
  cardNumber: '',
  cardCode: '',
  expiresMonth: '',
  expiresYear: ''
}

export const Cart = () => {
  const { isOpen, items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const [step, setStep] = useState<Step>('cart')
  const [orderId, setOrderId] = useState('')

  const closeCart = () => {
    dispatch(close())
    setStep('cart')
  }

  const removeItem = (id: number) => dispatch(remove(id))
  const totalPrice = useMemo(() => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco * valorAtual.quantidade
    }, 0)
  }, [items])

  const currentYear = new Date().getFullYear()

  // Schema de Validação com Yup
  const validationSchema = Yup.object({
    receiver: Yup.string().when('step', {
      is: (val: string) => val === 'delivery' || val === 'payment',
      then: (schema) =>
        schema.required('Campo obrigatório').min(3, 'Nome muito curto')
    }),
    address: Yup.string().when('step', {
      is: (val: string) => val === 'delivery' || val === 'payment',
      then: (schema) => schema.required('Campo obrigatório')
    }),
    city: Yup.string().when('step', {
      is: (val: string) => val === 'delivery' || val === 'payment',
      then: (schema) => schema.required('Campo obrigatório')
    }),
    zipCode: Yup.string().when('step', {
      is: (val: string) => val === 'delivery' || val === 'payment',
      then: (schema) =>
        schema.required('Campo obrigatório').min(9, 'CEP inválido')
    }),
    number: Yup.string().when('step', {
      is: (val: string) => val === 'delivery' || val === 'payment',
      then: (schema) => schema.required('Campo obrigatório')
    }),
    cardName: Yup.string().when('step', {
      is: 'payment',
      then: (schema) => schema.required('Campo obrigatório')
    }),
    cardNumber: Yup.string().when('step', {
      is: 'payment',
      then: (schema) =>
        schema.required('Campo obrigatório').min(19, 'Cartão inválido')
    }),
    cardCode: Yup.string().when('step', {
      is: 'payment',
      then: (schema) =>
        schema.required('Campo obrigatório').min(3, 'CVV inválido')
    }),
    expiresMonth: Yup.string().when('step', {
      is: 'payment',
      then: (schema) =>
        schema
          .required('Campo obrigatório')
          .min(2, 'Mês inválido')
          .test('valid-month', 'Mês inválido', (value) => {
            if (!value) return false
            const month = parseInt(value, 10)
            return month >= 1 && month <= 12
          })
    }),
    expiresYear: Yup.string().when('step', {
      is: 'payment',
      then: (schema) =>
        schema
          .required('Campo obrigatório')
          .min(4, 'Ano inválido')
          .test('valid-year', 'Ano vencido', (value) => {
            if (!value) return false
            const year = parseInt(value, 10)
            return year >= currentYear
          })
    })
  })

  // Configuração do Formik
  const formik = useFormik<CheckoutFormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const payload = buildCheckoutPayload(values, items)

        const response = await fetch(API_ENDPOINTS.checkout, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })

        const data = await response.json()
        setOrderId(data.orderId)
        setStep('confirmation')
      } catch (error) {
        console.error('Erro ao finalizar pedido', error)
      }
    }
  })

  const goToPayment = async () => {
    formik.setFieldValue('step', 'delivery')
    const errors = await formik.validateForm()

    if (
      !errors.receiver &&
      !errors.address &&
      !errors.city &&
      !errors.zipCode &&
      !errors.number
    ) {
      setStep('payment')
      formik.setFieldValue('step', 'payment')
    } else {
      formik.setTouched({
        receiver: true,
        address: true,
        city: true,
        zipCode: true,
        number: true
      })
    }
  }

  const checkInputHasError = (fieldName: CheckoutFormFieldName) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors
    return isTouched && isInvalid
  }

  const getFieldProps = (fieldName: CheckoutFormFieldName) => ({
    id: fieldName,
    name: fieldName,
    value: formik.values[fieldName],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className: checkInputHasError(fieldName) ? 'error' : ''
  })

  const renderFieldError = (fieldName: CheckoutFormFieldName) =>
    checkInputHasError(fieldName) ? (
      <ErrorMessage>{formik.errors[fieldName] as string}</ErrorMessage>
    ) : null

  const handleFinishOrder = () => {
    formik.resetForm()
    dispatch(clear())
    dispatch(close())
    setStep('cart')
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {/* PASSO 1: CARRINHO DE COMPRAS */}
        {step === 'cart' && (
          <CartStepSection
            items={items}
            totalPrice={totalPrice}
            onRemoveItem={removeItem}
            onContinue={() => setStep('delivery')}
          />
        )}

        <form onSubmit={formik.handleSubmit}>
          {/* PASSO 2: ENTREGA */}
          {step === 'delivery' && (
            <DeliveryStepSection
              getFieldProps={getFieldProps}
              renderFieldError={renderFieldError}
              onContinueToPayment={goToPayment}
              onBackToCart={() => setStep('cart')}
            />
          )}

          {/* PASSO 3: PAGAMENTO */}
          {step === 'payment' && (
            <PaymentStepSection
              getFieldProps={getFieldProps}
              renderFieldError={renderFieldError}
              totalPrice={totalPrice}
              onBackToDelivery={() => setStep('delivery')}
            />
          )}
        </form>

        {/* PASSO 4: CONFIRMAÇÃO */}
        {step === 'confirmation' && (
          <ConfirmationStepSection
            orderId={orderId}
            onFinish={handleFinishOrder}
          />
        )}
      </Sidebar>
    </CartContainer>
  )
}
