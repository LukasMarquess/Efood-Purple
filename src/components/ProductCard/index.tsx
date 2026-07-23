import {
  CardContainer,
  ProductImage,
  Title,
  Description,
  AddButton
} from './styles'

interface ProductCardProps {
  image: string
  title: string
  description: string
}

export function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <CardContainer>
      <ProductImage src={image} alt={`Imagem de ${title}`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <AddButton>Adicionar ao carrinho</AddButton>
    </CardContainer>
  )
}
