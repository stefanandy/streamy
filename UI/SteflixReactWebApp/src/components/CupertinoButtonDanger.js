import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonDanger(props) {
  return (
    <Container {...props}>
      <Register>{props.register || "Register"}</Register>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FF3B30;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Register = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  top: 0px;
  left: 18px;
`;

export default CupertinoButtonDanger;
