import { styled } from "styled-components"
import { devices } from "../../../../config/devices"
import { sizes } from "../../../../config/font-sizes"

interface ContainerProps { color: string }
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes.profileHeaderPadding};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.color};
`

export const ImageContainer = styled.div`
  img {
    border-radius: 100%;
    width: ${sizes.profilePicture};
    height: ${sizes.profilePicture};
  }
  
  @media ${devices.tabletMax} {
    img {
      width: ${sizes.profilePictureMobile};
      height: ${sizes.profilePictureMobile};
    }
  }
`
export const HeroName = styled.p<ContainerProps>`
  margin: 0;
  color: ${props => props.color};
  font-size: ${sizes.profileTitle};
  
  @media ${devices.tabletMax} {
    font-size: ${sizes.profileTitleMobile};
  }
`