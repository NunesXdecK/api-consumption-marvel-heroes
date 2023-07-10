import { styled } from "styled-components"
import { devices } from "../../../../config/devices"
import { sizes } from "../../../../config/font-sizes"
import { colors } from "../../../../config/colors"

export const Container = styled.div`
  overflow-y: auto;
  padding: ${sizes.paperPadding};
  label {
    font-size: ${sizes.profileLabel};
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    font-size: ${sizes.profileText};
  }
  p, ul {
    padding-bottom: ${sizes.profileMargin};
    margin-bottom: ${sizes.profileMargin};
    border-bottom: 1px solid ${colors.inputIconGray};
  }
  :last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #888;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  @media ${devices.tabletMax} {
    label {
      font-size: ${sizes.listTitleMobile};
    }
    li {
      font-size: ${sizes.listSubtitleMobile};
    }
  }
`

export const HeroDescription = styled.p`
  margin: 0;
  font-size: ${sizes.profileText};
  @media ${devices.tabletMax} {
    font-size: ${sizes.listSubtitleMobile};
  }
`