import { FooterContainer, SocialLinks, Disclaimer } from './styles'

import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'

export function Footer() {
  return (
    <FooterContainer>
      <h3>eFood</h3>

      <SocialLinks>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </SocialLinks>

      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Disclaimer>
    </FooterContainer>
  )
}
