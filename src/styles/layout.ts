import { css } from 'styled-components'

export const breakpoints = {
  tablet: '1024px',
  mobile: '768px'
}

export const container1024 = css`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export const backgroundCover = css<{ $bgImage: string }>`
  background-image: url('${(props) => props.$bgImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
