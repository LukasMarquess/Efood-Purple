import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CardContainer = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
  height: 338px;
  box-sizing: border-box;
  overflow: hidden;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: 338px;
  }
`

export const ProductImage = styled.img`
  width: 300px;
  height: 167px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin-top: 0;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0;
  flex: 1;
  width: 300px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AddButton = styled.button`
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  width: 300px;
  height: 24px;
  padding: 0;
  border: none;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  margin-top: auto;
  transition: opacity 0.2s;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`
