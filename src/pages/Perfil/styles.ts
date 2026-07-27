import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderBar = styled.header<{ $bgImage: string }>`
  background-color: ${theme.colors.primaryLight};
  background-image: url('${(props) => props.$bgImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 0;
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
    gap: 1.5rem;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
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
  padding: 2rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-size: 32px;
    font-weight: 100;
    color: ${theme.colors.white};

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${theme.colors.white};

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 1024px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 320px);
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 32px;
  width: 1024px;
  height: 344px;
  display: flex;
  gap: 24px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 24px;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  button {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 14px;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    align-self: flex-start;
  }
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
