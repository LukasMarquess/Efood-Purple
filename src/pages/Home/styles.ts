import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const HeaderContainer = styled.header`
  background-color: ${theme.colors.primaryLight};
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`

export const Title = styled.h1`
  color: ${theme.colors.primary};
  margin-top: 2rem;
  font-size: 2.2rem;
  max-width: 550px;
  line-height: 1.2;
`

export const MainContainer = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
