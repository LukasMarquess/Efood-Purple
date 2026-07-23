import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { ProductCard } from '../../components/ProductCard'
import {
  HeaderBar,
  Banner,
  BannerContent,
  MainContainer,
  ProductsGrid
} from './styles'

const mockRestaurant = {
  title: 'La Dolce Vita Trattoria',
  category: 'Italiana',
  bannerImage:
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop'
}

const mockProducts = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop' // Imagem de pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500&auto=format&fit=crop'
  }
]

export default function Perfil() {
  return (
    <>
      <HeaderBar>
        <Link to="/">Restaurantes</Link>
        <h2>eFood</h2>
        <p>0 produto(s) no carrinho</p>
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
