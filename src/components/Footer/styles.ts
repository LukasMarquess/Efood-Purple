import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.primaryLight};
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;

  img {
    width: 125px;
    height: 58px;
    object-fit: contain;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`

export const Disclaimer = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.75rem;
  max-width: 480px;
  text-align: center;
  line-height: 1.4;
`
