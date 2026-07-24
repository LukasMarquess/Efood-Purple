import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { ProductCard } from '../../components/ProductCard'
import logoImg from '../../assets/logo.png'
import fundoIMG from '../../assets/fundoH.png'
import macalao from '../../assets/macaraohome.png'
import macalaoP from '../../assets/macalaoperfil.png'
import closeIcon from '../../assets/close.png'
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

const mockRestaurant = {
  title: 'La Dolce Vita Trattoria',
  category: 'Italiana',
  bannerImage: macalao
}

const mockProducts = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: macalaoP
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: macalaoP
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: macalaoP
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: macalaoP
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: macalaoP
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: macalaoP
  }
]

export default function Perfil() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <HeaderBar $bgImage={fundoIMG}>
        <HeaderContent>
          <Link to="/">Restaurantes</Link>
          <img src={logoImg} alt="Logo da efood" />
          <p>0 produto(s) no carrinho</p>
        </HeaderContent>
      </HeaderBar>

      <Banner $bgImage={mockRestaurant.bannerImage}>
        <BannerContent>
          <span>{mockRestaurant.category}</span>
          <h1>{mockRestaurant.title}</h1>
        </BannerContent>
      </Banner>

      <MainContainer>
        <ProductsGrid>
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              onClick={() => setIsModalVisible(true)}
            />
          ))}
        </ProductsGrid>
      </MainContainer>

      {isModalVisible && (
        <ModalContainer onClick={() => setIsModalVisible(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseIcon
              src={closeIcon}
              alt="Fechar"
              onClick={() => setIsModalVisible(false)}
            />

            <ModalImage src={macalaoP} alt="Pizza" />

            <ModalDetails>
              <div>
                <h3>Pizza Marguerita</h3>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                  <br />
                  <br />
                  Serve: de 2 a 3 pessoas
                </p>
              </div>
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </ModalDetails>
          </ModalContent>
        </ModalContainer>
      )}

      <Footer />
    </>
  )
}
