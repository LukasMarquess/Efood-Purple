import { IMaskInput } from 'react-imask'
import type { ChangeEvent, FocusEvent, ReactElement } from 'react'

import type { CartItem as CartItemType } from '../../store/reducers/cart'
import { formatPrice } from '../../utils/format'
import type { CheckoutFormFieldName } from '../../types/checkout'
import lixeiraImg from '../../assets/lixeira.png'
import {
  CartItem,
  TotalContainer,
  CheckoutButton,
  Title,
  Row,
  InputGroup,
  ConfirmationText,
  EmptyText
} from './styles'

type FieldInputProps = {
  id: CheckoutFormFieldName
  name: CheckoutFormFieldName
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
  className: string
}

type CommonFieldsProps = {
  getFieldProps: (fieldName: CheckoutFormFieldName) => FieldInputProps
  renderFieldError: (fieldName: CheckoutFormFieldName) => ReactElement | null
}

type CartStepSectionProps = {
  items: CartItemType[]
  totalPrice: number
  onRemoveItem: (id: number) => void
  onContinue: () => void
}

export const CartStepSection = ({
  items,
  totalPrice,
  onRemoveItem,
  onContinue
}: CartStepSectionProps) => {
  if (items.length === 0) {
    return (
      <EmptyText>
        O carrinho está vazio, adicione pelo menos um produto para continuar com
        a compra.
      </EmptyText>
    )
  }

  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id}>
          <img src={item.foto} alt={item.nome} />
          <div>
            <h3>
              {item.quantidade}x {item.nome}
            </h3>
            <span>{formatPrice(item.preco * item.quantidade)}</span>
          </div>
          <button onClick={() => onRemoveItem(item.id)} type="button">
            <img className="lixeira" src={lixeiraImg} alt="Remover" />
          </button>
        </CartItem>
      ))}

      <TotalContainer>
        <span>Valor total</span>
        <span>{formatPrice(totalPrice)}</span>
      </TotalContainer>
      <CheckoutButton onClick={onContinue}>
        Continuar com a entrega
      </CheckoutButton>
    </>
  )
}

type DeliveryStepSectionProps = CommonFieldsProps & {
  onContinueToPayment: () => void
  onBackToCart: () => void
}

export const DeliveryStepSection = ({
  getFieldProps,
  renderFieldError,
  onContinueToPayment,
  onBackToCart
}: DeliveryStepSectionProps) => {
  return (
    <>
      <Title>Entrega</Title>
      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input type="text" {...getFieldProps('receiver')} />
        {renderFieldError('receiver')}
      </InputGroup>

      <InputGroup>
        <label htmlFor="address">Endereço</label>
        <input type="text" {...getFieldProps('address')} />
        {renderFieldError('address')}
      </InputGroup>

      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input type="text" {...getFieldProps('city')} />
        {renderFieldError('city')}
      </InputGroup>

      <Row>
        <InputGroup maxWidth="155px">
          <label htmlFor="zipCode">CEP</label>
          <IMaskInput mask="00000-000" {...getFieldProps('zipCode')} />
          {renderFieldError('zipCode')}
        </InputGroup>

        <InputGroup maxWidth="155px">
          <label htmlFor="number">Número</label>
          <input type="text" {...getFieldProps('number')} />
          {renderFieldError('number')}
        </InputGroup>
      </Row>

      <InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input type="text" {...getFieldProps('complement')} />
      </InputGroup>

      <CheckoutButton
        type="button"
        onClick={onContinueToPayment}
        style={{ marginTop: '24px' }}
      >
        Continuar com o pagamento
      </CheckoutButton>
      <CheckoutButton type="button" onClick={onBackToCart}>
        Voltar para o carrinho
      </CheckoutButton>
    </>
  )
}

type PaymentStepSectionProps = CommonFieldsProps & {
  totalPrice: number
  onBackToDelivery: () => void
}

export const PaymentStepSection = ({
  getFieldProps,
  renderFieldError,
  totalPrice,
  onBackToDelivery
}: PaymentStepSectionProps) => {
  return (
    <>
      <Title>Pagamento - Valor a pagar {formatPrice(totalPrice)}</Title>
      <InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input type="text" {...getFieldProps('cardName')} />
        {renderFieldError('cardName')}
      </InputGroup>

      <Row>
        <InputGroup maxWidth="228px">
          <label htmlFor="cardNumber">Número do cartão</label>
          <IMaskInput
            mask="0000 0000 0000 0000"
            {...getFieldProps('cardNumber')}
          />
          {renderFieldError('cardNumber')}
        </InputGroup>

        <InputGroup maxWidth="87px">
          <label htmlFor="cardCode">CVV</label>
          <IMaskInput mask="000" {...getFieldProps('cardCode')} />
          {renderFieldError('cardCode')}
        </InputGroup>
      </Row>

      <Row>
        <InputGroup maxWidth="155px">
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <IMaskInput mask="00" {...getFieldProps('expiresMonth')} />
          {renderFieldError('expiresMonth')}
        </InputGroup>

        <InputGroup maxWidth="155px">
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <IMaskInput mask="0000" {...getFieldProps('expiresYear')} />
          {renderFieldError('expiresYear')}
        </InputGroup>
      </Row>

      <CheckoutButton type="submit" style={{ marginTop: '24px' }}>
        Finalizar pagamento
      </CheckoutButton>
      <CheckoutButton type="button" onClick={onBackToDelivery}>
        Voltar para a edição de endereço
      </CheckoutButton>
    </>
  )
}

type ConfirmationStepSectionProps = {
  orderId: string
  onFinish: () => void
}

export const ConfirmationStepSection = ({
  orderId,
  onFinish
}: ConfirmationStepSectionProps) => {
  return (
    <>
      <Title>Pedido realizado - {orderId}</Title>
      <ConfirmationText>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </ConfirmationText>
      <CheckoutButton onClick={onFinish}>Concluir</CheckoutButton>
    </>
  )
}
