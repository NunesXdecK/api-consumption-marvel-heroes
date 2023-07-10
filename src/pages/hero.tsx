import useHero from "../modules/core/hooks/use-hero"
import { Content } from "../modules/hero/components/content/styles"
import HeroHeader from "../modules/hero/components/hero-header/hero-header"
import HeroContent from "../modules/hero/components/hero-content/hero-content"
import ProgressBar from "../components/ui/progress-bar/progress-bar"

export default function Hero() {
  const { hero, heroColors } = useHero()
  if (!hero || !heroColors) return <ProgressBar />
  return (
    <Content>
      <HeroHeader heroColors={heroColors} hero={hero} />
      <HeroContent hero={hero} />
    </Content>
  )
}