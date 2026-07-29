import type { CartItem } from '../store/reducers/cart'

export type CheckoutFormStep = 'delivery' | 'payment'

export interface CheckoutFormValues {
  step: CheckoutFormStep
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
  cardName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

export type CheckoutFormFieldName = Exclude<keyof CheckoutFormValues, 'step'>

export interface CheckoutPayload {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export const buildCheckoutPayload = (
  values: CheckoutFormValues,
  items: CartItem[]
): CheckoutPayload => ({
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
})
