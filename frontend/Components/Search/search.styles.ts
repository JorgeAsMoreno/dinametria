import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px solid #cee1ff;
  align-items: center;
  display: flex;
  margin-left: 1em;
`

const Input = styled.input`
  border: 0;
  color: #214a88;
  padding: 0 .5em;
  outline: 0;
`

const Icon = styled.span`
  color: #214a88;
  background: #cee1ff;
  padding: .5em;
`

export default {
  Wrapper,
  Input,
  Icon
}
