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
  onClick: () => void
}

export const ProductCard = ({
  title,
  description,
  image,
  onClick
}: ProductCardProps) => {
  return (
    <CardContainer>
      <ProductImage src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      <AddButton onClick={onClick}>Mais detalhes</AddButton>
    </CardContainer>
  )
}
