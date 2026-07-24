import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { ProductCard } from '../../components/ProductCard'
import logoImg from '../../assets/logo.png'
import fundoIMG from '../../assets/fundoH.png'
import macalao from '../../assets/macaraohome.png'
import macalaoP from '../../assets/macalaoperfil.png'
import {
  HeaderBar,
  HeaderContent,
  Banner,
  BannerContent,
  MainContainer,
  ProductsGrid
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
            />
          ))}
        </ProductsGrid>
      </MainContainer>

      <Footer />
    </>
  )
}
