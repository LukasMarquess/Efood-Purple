import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderBar = styled.header<{ $bgImage: string }>`
  background-color: ${theme.colors.primaryLight};
  background-image: url('${(props) => props.$bgImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 150px;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-weight: 900;
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
  background-repeat: no-repeat;
  background-position: center 40%;
  height: 280px;
  width: 100%;
`

export const BannerContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-size: 32px;
    font-weight: 100;
    color: ${theme.colors.white};
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${theme.colors.white};
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
