import {
  CardContainer,
  ImageContainer,
  TagsContainer,
  Tag,
  ContentContainer,
  HeaderRow,
  Rating,
  Description,
  LearnMoreButton
} from './styles'

interface RestaurantCardProps {
  id: number
  title: string
  rating: number
  description: string
  image: string
  tags: string[]
}

export function RestaurantCard({
  id,
  title,
  rating,
  description,
  image,
  tags
}: RestaurantCardProps) {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={`Imagem do restaurante ${title}`} />
        <TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </ImageContainer>

      <ContentContainer>
        <HeaderRow>
          <h3>{title}</h3>
          <Rating>{rating}</Rating>
        </HeaderRow>

        <Description>{description}</Description>

        <LearnMoreButton to={`/perfil/${id}`}>Saiba mais</LearnMoreButton>
      </ContentContainer>
    </CardContainer>
  )
}
