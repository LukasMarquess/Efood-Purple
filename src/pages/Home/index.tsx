import { RestaurantCard } from '../../components/RestaurantCard'
import { Footer } from '../../components/Footer'
import {
  HeaderContainer,
  Title,
  MainContainer,
  RestaurantsGrid
} from './styles'

const mockRestaurants = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida e pratos bem embalados.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiViZG77Ata1DMUiCGvoy5XcGE4EbxpPjgoPtb3uGbW6z7b20sEBVzIzM&s=10',
    tags: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida e pratos bem embalados.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiViZG77Ata1DMUiCGvoy5XcGE4EbxpPjgoPtb3uGbW6z7b20sEBVzIzM&s=10',
    tags: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida e pratos bem embalados.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiViZG77Ata1DMUiCGvoy5XcGE4EbxpPjgoPtb3uGbW6z7b20sEBVzIzM&s=10',
    tags: ['Italiana']
  }
]

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <h2>eFood</h2>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContainer>

      <MainContainer>
        <RestaurantsGrid>
          {mockRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              rating={restaurant.rating}
              description={restaurant.description}
              image={restaurant.image}
              tags={restaurant.tags}
            />
          ))}
        </RestaurantsGrid>
      </MainContainer>

      <Footer />
    </>
  )
}
