export interface HeroColors { primary: string, secondary: string }

export interface HeroList {
  available: number
  collectionURI: string
  items: {
    resourceURI: string
    name: string
    type?: string
  }[]
  returned: number
}

export interface Hero {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: HeroList
  series: HeroList
  stories: HeroList
  events: HeroList
  urls: [
    {
      type: string
      url: string
    }
  ]
}