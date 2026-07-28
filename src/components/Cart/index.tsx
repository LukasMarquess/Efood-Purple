import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import lixeiraImg from '../../assets/lixeira.png'

import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  TotalContainer,
  CheckoutButton
} from './styles'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))

  const getTotalPrice = () => {
    return items.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.preco,
      0
    )
  }

  if (!isOpen) return null

  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
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

        <CheckoutButton>Continuar com a entrega</CheckoutButton>
      </Sidebar>
    </CartContainer>
  )
}
