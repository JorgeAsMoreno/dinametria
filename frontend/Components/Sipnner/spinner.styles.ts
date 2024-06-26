import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  border: 16px solid #cee1ff;
  border-top: 16px solid #002358;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default {
  Spinner
}
