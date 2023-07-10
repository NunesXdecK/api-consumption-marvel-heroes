import { styled } from "styled-components"
import { colors } from "../../../../config/colors"
import { devices } from "../../../../config/devices"
import { sizes } from "../../../../config/font-sizes"

export const Container = styled.button`
  border: none;
  height: 56px;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  text-align: left;
  width: calc(49% - 0px);
  transition-duration: 300ms;
  background-color: transparent;
  padding: ${sizes.listPaddingXY};
  &:hover {
    background-color: #CCCCCC;
  }
  svg {
    fill: ${colors.subtitle};
    width: ${sizes.listItemIconMobile};
    height: ${sizes.listItemIconMobile};
  }
  @media ${devices.tabletMax} {
    width: calc(100% - 0px);
    svg {
      width: ${sizes.listItemIconMobile};
      height: ${sizes.listItemIconMobile};
    }
  }
`

export const ImageContainer = styled.div`
  margin-right: ${sizes.listTitleMobile};
  img {
    border-radius: 100%;
    width: ${sizes.listItemIcon};
    height: ${sizes.listItemIcon};
  }
  
  @media ${devices.tabletMax} {
    img {
      width: ${sizes.listItemIconProfile};
      height: ${sizes.listItemIconProfile};
    }
  }
`

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h1, p {
    margin: 0;
    font-weight: 400;
  }
  h1 {
    margin-bottom: 6px;
    font-size: ${sizes.listTitleMobile};
  }
  p {
    overflow: hidden;
    max-width: 225px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: ${sizes.listTitleMobile};
  }
  
  @media ${devices.tabletMax} {
    h1 {font-size: ${sizes.listTitleMobile};}
    p {font-size: ${sizes.listSubtitleMobile};}
  }
`