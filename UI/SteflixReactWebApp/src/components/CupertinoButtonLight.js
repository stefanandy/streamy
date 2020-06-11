import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonLight(props) {
  return (
    <Container {...props}>
      <Center horizontal>
        <SignUp>Sign Up</SignUp>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #EFEFF4;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const SignUp = styled.span`
  font-family: Roboto;
  color: #000;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonLight;
