import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { ProductCard } from '../../components/ProductCard'
import logoImg from '../../assets/logo.png'
import closeIcon from '../../assets/close.png'
import fundoIMG from '../../assets/fundoH.png'
import { Restaurante, Produto } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { add, open } from '../../store/reducers/cart'

import {
  HeaderBar,
  HeaderContent,
  Banner,
  BannerContent,
  MainContainer,
  ProductsGrid,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalDetails,
  CloseIcon
} from './styles'

export default function Perfil() {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()
  const [modalProduto, setModalProduto] = useState<Produto | undefined>()

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const quantidadeTotalItens = items.reduce(
    (acumulador, item) => acumulador + item.quantidade,
    0
  )

  useEffect(() => {
    window.scrollTo(0, 0)

    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
      .catch((err) => console.error('Erro ao carregar o restaurante:', err))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderBar $bgImage={fundoIMG}>
        <HeaderContent>
          <Link to="/">Restaurantes</Link>
          <img src={logoImg} alt="Logo da efood" />
          <p onClick={() => dispatch(open())} style={{ cursor: 'pointer' }}>
            {quantidadeTotalItens} produto(s) no carrinho
          </p>
        </HeaderContent>
      </HeaderBar>

      <Banner $bgImage={restaurante.capa}>
        <BannerContent>
          <span>{restaurante.tipo}</span>
          <h1>{restaurante.titulo}</h1>
        </BannerContent>
      </Banner>

      <MainContainer>
        <ProductsGrid>
          {restaurante.cardapio.map((produto) => (
            <ProductCard
              key={produto.id}
              title={produto.nome}
              description={produto.descricao}
              image={produto.foto}
              onClick={() => setModalProduto(produto)}
            />
          ))}
        </ProductsGrid>
      </MainContainer>

      {modalProduto && (
        <ModalContainer onClick={() => setModalProduto(undefined)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseIcon
              src={closeIcon}
              alt="Fechar"
              onClick={() => setModalProduto(undefined)}
            />

            <ModalImage src={modalProduto.foto} alt={modalProduto.nome} />

            <ModalDetails>
              <div>
                <h3>{modalProduto.nome}</h3>
                <p>
                  {modalProduto.descricao}
                  <br />
                  <br />
                  {modalProduto.porcao}
                </p>
              </div>
              <button
                onClick={() => {
                  dispatch(add(modalProduto))
                  setModalProduto(undefined)
                  dispatch(open())
                }}
              >
                Adicionar ao carrinho - R${' '}
                {modalProduto.preco.toFixed(2).replace('.', ',')}
              </button>
            </ModalDetails>
          </ModalContent>
        </ModalContainer>
      )}

      <Footer />
    </>
  )
}
