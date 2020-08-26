import styled from "styled-components"

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid var(--link-background);
  width: 30%;
  color: var(--link-background);
  overflow: auto;

  &:hover {
    background-color: var(--link-background);
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.3em;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    color: inherit;
  }
`
