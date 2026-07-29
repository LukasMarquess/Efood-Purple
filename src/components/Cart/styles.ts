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
  margin-bottom: 16px;
`
export const Title = styled.h2`
  color: ${theme.colors.primaryLight};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: ${(props) => props.maxWidth || '100%'};

  label {
    color: ${theme.colors.primaryLight};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.black};
    border: 2px solid ${theme.colors.primaryLight};
    height: 32px;
    padding: 0 8px;
    font-size: 14px;
    font-weight: 700;
    outline: none;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const ErrorMessage = styled.span`
  color: #ffcccc;
  font-size: 12px;
  margin-top: 4px;
`

export const ConfirmationText = styled.div`
  color: ${theme.colors.primaryLight};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;

  p {
    margin-bottom: 16px;
  }
`
