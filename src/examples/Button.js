import styled from "styled-components"
// dynamic styling using interpoliation
const colorBlue = "blue"
// dynamic styling using props also using
// attribute defaults and checking

const Button = styled.button`
  color: ${props => props.color};
  background: ${colorBlue};
  /* font-size: 1rem; */
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  padding: 1rem;
`

export default Button
