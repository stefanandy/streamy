import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonGrey(props) {
  return (
    <Container {...props}>
      <TextInput placeholder="Login"></TextInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-color: rgba(255,255,255,1);
  border-radius: 12px;
  border-style: solid;
`;

const TextInput = styled.input`
  font-family: Poppins;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  width: 99px;
  height: 21px;
  font-style: normal;
  left: 28px;
  top: 0px;
  border: none;
  background: transparent;
`;

export default CupertinoButtonGrey;
