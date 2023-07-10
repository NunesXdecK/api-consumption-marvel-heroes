import { ArrowFoward } from "../../../../components/ui/Icons"
import { Hero } from "../../../core/types/hero"
import { Container, ImageContainer, InfoContainer } from "./styles"

interface Props {
  hero: Hero
  onClick?: () => void
}

export default function HeroPortrait({ hero, onClick }: Props) {
  if (!hero) return <></>
  return (
    <Container onClick={onClick}>
      <ImageContainer>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
      </ImageContainer>
      <InfoContainer>
        <h1>{hero.name}</h1>
        <p>{hero.description}</p>
      </InfoContainer>
      <ArrowFoward />
    </Container>
  )
}
