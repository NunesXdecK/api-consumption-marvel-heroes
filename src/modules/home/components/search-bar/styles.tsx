import { styled } from "styled-components"
import { Paper } from "../../../../components/ui/paper/styles"

export const SearchBar = styled(Paper)`
  form {
    gap: 6px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    fieldset {
      flex: 1;
    }
  }
`