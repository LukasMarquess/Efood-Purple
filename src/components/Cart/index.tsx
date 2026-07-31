import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'
import { close, remove, clear } from '../../store/reducers/cart'

import { RootState } from '../../store'
import lixeiraImg from '../../assets/lixeira.png'

import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  TotalContainer,
  CheckoutButton,
  Title,
  Row,
  InputGroup,
  ErrorMessage,
  ConfirmationText,
  EmptyText
} from './styles'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<Step>('cart')
  const [orderId, setOrderId] = useState('')

  const closeCart = () => {
    dispatch(close())
    setStep('cart')
  }

  const removeItem = (id: number) => dispatch(remove(id))
  const [cepError, setCepError] = useState(false)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco * valorAtual.quantidade
    }, 0)
  }

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
    complement: Yup.string().when('step', {
      is: (val: string) => val === 'delivery' || val === 'payment',
      then: (schema) => schema.optional()
    }),
    cardName: Yup.string().when('step', {
      is: 'payment',
      then: (schema) =>
        schema
          .required('Campo obrigatório')
          .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'O nome deve conter apenas letras')
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
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          products: items.map((item) => ({ id: item.id, price: item.preco })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }

        const response = await fetch(
          'https://api-ebac.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }
        )

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

    if (cepError) {
      errors.zipCode = 'CEP não encontrado'
    }

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
      if (cepError) {
        formik.setFieldError('zipCode', 'CEP não encontrado')
      }
    }
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors
    return isTouched && isInvalid
  }

  const handleFinishOrder = () => {
    formik.resetForm()
    dispatch(clear())
    dispatch(close())
    setStep('cart')
  }

  const checkCEP = async (e: React.FocusEvent<HTMLInputElement>) => {
    formik.handleBlur(e)
    const cep = e.target.value.replace(/\D/g, '')

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()

        if (!data.erro) {
          setCepError(false) // <-- Avisa que o CEP é válido
          formik.setFieldValue('address', `${data.logradouro}, ${data.bairro}`)
          formik.setFieldValue('city', `${data.localidade} - ${data.uf}`)
        } else {
          setCepError(true) // <-- Avisa que o CEP é falso
          formik.setFieldError('zipCode', 'CEP não encontrado')
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP', error)
      }
    }
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {/* PASSO 1: CARRINHO DE COMPRAS */}
        {step === 'cart' && (
          <>
            {items.length > 0 ? (
              <>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>
                        {item.quantidade}x {item.nome}
                      </h3>
                      <span>
                        R${' '}
                        {(item.preco * item.quantidade)
                          .toFixed(2)
                          .replace('.', ',')}
                      </span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button">
                      <img className="lixeira" src={lixeiraImg} alt="Remover" />
                    </button>
                  </CartItem>
                ))}

                <TotalContainer>
                  <span>Valor total</span>
                  <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                </TotalContainer>
                <CheckoutButton onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </CheckoutButton>
              </>
            ) : (
              <EmptyText>
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra.
              </EmptyText>
            )}
          </>
        )}

        <form onSubmit={formik.handleSubmit}>
          {/* PASSO 2: ENTREGA */}
          {step === 'delivery' && (
            <>
              <Title>Entrega</Title>
              <InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={formik.values.receiver}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
                {checkInputHasError('receiver') && (
                  <ErrorMessage>
                    {formik.errors.receiver as string}
                  </ErrorMessage>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
                {checkInputHasError('address') && (
                  <ErrorMessage>{formik.errors.address as string}</ErrorMessage>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
                {checkInputHasError('city') && (
                  <ErrorMessage>{formik.errors.city as string}</ErrorMessage>
                )}
              </InputGroup>

              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="zipCode">CEP</label>
                  <IMaskInput
                    id="zipCode"
                    name="zipCode"
                    mask="00000-000"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={checkCEP}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                  />
                  {checkInputHasError('zipCode') && (
                    <ErrorMessage>
                      {formik.errors.zipCode as string}
                    </ErrorMessage>
                  )}
                </InputGroup>
                <InputGroup maxWidth="155px">
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                  {checkInputHasError('number') && (
                    <ErrorMessage>
                      {formik.errors.number as string}
                    </ErrorMessage>
                  )}
                </InputGroup>
              </Row>

              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={formik.values.complement}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </InputGroup>

              <CheckoutButton
                type="button"
                onClick={goToPayment}
                style={{ marginTop: '24px' }}
              >
                Continuar com o pagamento
              </CheckoutButton>
              <CheckoutButton type="button" onClick={() => setStep('cart')}>
                Voltar para o carrinho
              </CheckoutButton>
            </>
          )}

          {/* PASSO 3: PAGAMENTO */}
          {step === 'payment' && (
            <>
              <Title>
                Pagamento - Valor a pagar R${' '}
                {getTotalPrice().toFixed(2).replace('.', ',')}
              </Title>
              <InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  value={formik.values.cardName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={checkInputHasError('cardName') ? 'error' : ''}
                />
                {checkInputHasError('cardName') && (
                  <ErrorMessage>
                    {formik.errors.cardName as string}
                  </ErrorMessage>
                )}
              </InputGroup>

              <Row>
                <InputGroup maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <IMaskInput
                    id="cardNumber"
                    name="cardNumber"
                    mask="0000 0000 0000 0000"
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                  {checkInputHasError('cardNumber') && (
                    <ErrorMessage>
                      {formik.errors.cardNumber as string}
                    </ErrorMessage>
                  )}
                </InputGroup>

                <InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <IMaskInput
                    id="cardCode"
                    name="cardCode"
                    mask="000"
                    value={formik.values.cardCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                  {checkInputHasError('cardCode') && (
                    <ErrorMessage>
                      {formik.errors.cardCode as string}
                    </ErrorMessage>
                  )}
                </InputGroup>
              </Row>

              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <IMaskInput
                    id="expiresMonth"
                    name="expiresMonth"
                    mask="00"
                    value={formik.values.expiresMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                  {checkInputHasError('expiresMonth') && (
                    <ErrorMessage>
                      {formik.errors.expiresMonth as string}
                    </ErrorMessage>
                  )}
                </InputGroup>

                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <IMaskInput
                    id="expiresYear"
                    name="expiresYear"
                    mask="0000"
                    value={formik.values.expiresYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                  />
                  {checkInputHasError('expiresYear') && (
                    <ErrorMessage>
                      {formik.errors.expiresYear as string}
                    </ErrorMessage>
                  )}
                </InputGroup>
              </Row>

              <CheckoutButton type="submit" style={{ marginTop: '24px' }}>
                Finalizar pagamento
              </CheckoutButton>
              <CheckoutButton type="button" onClick={() => setStep('delivery')}>
                Voltar para a edição de endereço
              </CheckoutButton>
            </>
          )}
        </form>

        {/* PASSO 4: CONFIRMAÇÃO */}
        {step === 'confirmation' && (
          <>
            <Title>Pedido realizado - {orderId}</Title>
            <ConfirmationText>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </ConfirmationText>
            <CheckoutButton onClick={handleFinishOrder}>
              Concluir
            </CheckoutButton>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}
