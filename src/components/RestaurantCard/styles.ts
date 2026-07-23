import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { theme } from '../../styles/theme'

export const CardContainer = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  height: 220px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: bold;
`

export const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
    color: ${theme.colors.primary};
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary};
  font-weight: bold;

  &::after {
    content: '★';
    color: #ffb300;
    font-size: 1.2rem;
  }
`

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
  flex: 1;
`

export const LearnMoreButton = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
