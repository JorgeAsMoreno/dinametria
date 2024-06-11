import styled from "styled-components"

const Dropdown = styled.div``

const Title = styled.p``

const DropdownOptions = styled.div`
  position: absolute;
  border: 1px solid #cee1ff;
  background: #fff;
  margin-left: -.8em;
  bottom: -14.125em;
  border-radius: 4px;
  z-index: 99;
  width: -webkit-fill-available;
`

const Options = styled.p`
  transition: .4s;
  padding: .75em 1em;
  cursor: pointer;

  &:hover {
    background: #cee1ff;
  }
`

const SelectedOption = styled.span`
  margin-left: .5em;
  border: 1px solid #cee1ff;
  padding: .5em .75em;
  cursor: pointer;
  align-items: center;
  display: flex;
  gap: .5em;
`

const DropdownContents = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`

export default {
  Dropdown,
  Title,
  DropdownOptions,
  Options,
  SelectedOption,
  DropdownContents
}
