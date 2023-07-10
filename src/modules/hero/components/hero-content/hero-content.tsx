import { Hero } from "../../../core/types/hero"
import { Container, HeroDescription } from "./styles"
import useWindowResize from "../../../core/hooks/use-window-rezise"
import HeroContentList from "./hero-content-list/hero-content-list"

interface Props {
  hero: Hero
}

export default function HeroContent({ hero }: Props) {
  const { targetRef, windowSize } = useWindowResize()
  if (!hero) return <></>
  return (
    <Container
      ref={targetRef}
      style={{
        height: windowSize.height - 10
      }}>
      <label htmlFor="hero-description">Descrição</label>
      <HeroDescription id="hero-description">{hero?.description}</HeroDescription>
      <HeroContentList id="stories" label="Historias" list={hero?.stories} />
      <HeroContentList id="events" label="Eventos" list={hero?.events} />
      <HeroContentList id="comics" label="Quadrinhos" list={hero?.comics} />
    </Container>
  )
}