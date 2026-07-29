import { useEffect, useState } from 'react'
import { RestaurantCard } from '../../components/RestaurantCard'
import { Footer } from '../../components/Footer'
import logoImg from '../../assets/logo.png'
import fundoIMG from '../../assets/fundoH.png'
import { Restaurante } from '../../types'
import { API_ENDPOINTS } from '../../constants/api'
import {
  HeaderContainer,
  Title,
  MainContainer,
  RestaurantsGrid
} from './styles'

export default function Home() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(API_ENDPOINTS.restaurantes)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch((err) => console.error('Erro ao carregar restaurantes:', err))
  }, [])

  return (
    <>
      <HeaderContainer $bgImage={fundoIMG}>
        <img src={logoImg} alt="eFood" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContainer>

      <MainContainer>
        <RestaurantsGrid>
          {restaurantes.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              tags={
                restaurant.destacado
                  ? ['Destaque da semana', restaurant.tipo]
                  : [restaurant.tipo]
              }
            />
          ))}
        </RestaurantsGrid>
      </MainContainer>

      <Footer />
    </>
  )
}
