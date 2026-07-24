import { RestaurantCard } from '../../components/RestaurantCard'
import { Footer } from '../../components/Footer'
import sushiImage from '../../assets/sushi.png'
import macaraoImage from '../../assets/macaraohome.png'
import logoImg from '../../assets/logo.png'
import fundoIMG from '../../assets/fundoH.png'
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
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushiImage,
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macaraoImage,
    tags: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macaraoImage,
    tags: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macaraoImage,
    tags: ['Italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macaraoImage,
    tags: ['Italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macaraoImage,
    tags: ['Italiana']
  }
]

export default function Home() {
  return (
    <>
      <HeaderContainer $bgImage={fundoIMG}>
        <img src={logoImg} alt="eFood" />
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
