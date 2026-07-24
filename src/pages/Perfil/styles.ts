import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderBar = styled.header`
  background-color: ${theme.colors.primaryLight};
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem; /* Mantém apenas o espaçamento para cima/baixo e laterais fixas */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: ${theme.colors.primary};

  a {
    color: ${theme.colors.primary};
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Banner = styled.div<{ $bgImage: string }>`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${(props) => props.$bgImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 280px;
  color: ${theme.colors.white};
`

export const BannerContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 2rem;
    font-weight: 300;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
`

export const MainContainer = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
