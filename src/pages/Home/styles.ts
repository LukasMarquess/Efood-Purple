import styled from 'styled-components'

import { theme } from '../../styles/theme'
import {
  backgroundCover,
  container1024,
  breakpoints
} from '../../styles/layout'

export const HeaderContainer = styled.header<{ $bgImage: string }>`
  background-color: ${theme.colors.primaryLight};
  ${backgroundCover}
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  text-align: center;
`
export const Title = styled.h1`
  color: ${theme.colors.primary};
  margin-top: 7rem;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  max-width: 540px;
  text-align: center;
`

export const MainContainer = styled.main`
  ${container1024}
  padding: 4rem 2rem;
`

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
