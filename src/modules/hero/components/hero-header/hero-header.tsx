import { Hero, HeroColors } from "../../../core/types/hero"
import { Container, HeroName, ImageContainer } from "./styles"

interface Props {
  hero: Hero
  heroColors: HeroColors
}

export default function HeroHeader({ hero, heroColors }: Props) {
  if (!hero) return <></>
  return (
    <Container color={heroColors?.primary}>
      <ImageContainer>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
      </ImageContainer>
      <HeroName color={heroColors?.secondary}>{hero.name}</HeroName>
    </Container>
  )
}