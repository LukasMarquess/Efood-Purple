import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  background-color: ${theme.colors.primary};
  width: 360px;
  max-width: 100%;
  height: 100%;
  padding: 32px 8px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 75%;
  }
`

export const CartItem = styled.div`
  background-color: ${theme.colors.primaryLight};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: ${theme.colors.primary};
    font-size: 14px;
    font-weight: 400;
    display: block;
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  .lixeira {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 40px;
`

export const CheckoutButton = styled.button`
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  border: none;
  width: 100%;
  height: 24px;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`
