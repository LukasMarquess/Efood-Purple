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
  padding: 6px 8px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
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
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.primary};
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary};

  &::after {
    content: '★';
    color: #ffb300;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
  flex: 1;
`

export const LearnMoreButton = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  width: 82px;
  height: 24px;
  text-decoration: none;
  display: inline-block;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
