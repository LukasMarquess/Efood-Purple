import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CardContainer = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;

  button {
    width: 300px;
    heigth: 24px;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin-top: 0.5rem;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0.5rem;
  flex: 1;
`

export const AddButton = styled.button`
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  width: 100%;
  text-align: center;
  /* border-radius: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
