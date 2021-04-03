import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

const StyledComponents = () => {
  let mainColor = "#bf4080",
    mainAlpha80 = "#bf408080";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;
  const fadeIn = keyframes`
    0%{
      opacity:0;
    }

    100%{
      opacity:1;
    }
  
  `;

  const Myh4 = styled.h4`
    padding: 2rem;
    text-align: Center;
    background-color: ${mainColor};
    color: ${(props) => props.color};
    color: ${({ color }) => color};
    color: ${({ color }) => color || "#000"};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 3s ease-out;

    ${({ isButton }) =>
      isButton &&
      css`
        max-width: 50%;
        margin: auto;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlpha80};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#ddd",
  };

  const dark = {
    bgColor: "#222",
    color: "#ddd",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h3{
      padding:2rem;
      background-color:#fff;
      color:#61dafb;
      text-transform:uppercase; 
    }
  `;

  return (
    <>
      <GlobalStyle />
      <h3>Styled Components</h3>
      <Myh4>H4 estilizado con styled components</Myh4>
      <Myh4 color="#61dafb">H4 estilizado con styled components</Myh4>
      <Myh4 isButton>H4 estilizado como botón</Myh4>
      <ThemeProvider theme={light}>
        <Box>Caja light</Box>
        <BoxRounded>Caja redondeada light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Caja dark</Box>
        <BoxRounded>Caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  );
};

export default StyledComponents;
