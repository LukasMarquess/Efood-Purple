import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CardContainer = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`

export const Title = styled.h4`
  font-size: 1rem;
  margin-top: 0.5rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  flex: 1;
`

export const AddButton = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  font-weight: bold;
  padding: 0.5rem;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }
`
