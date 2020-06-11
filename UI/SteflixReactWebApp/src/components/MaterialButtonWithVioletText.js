import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonWithVioletText(props) {
  return (
    <Container {...props}>
      <Caption>BUTTON</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #3F51B5;
  font-size: 14px;
`;

export default MaterialButtonWithVioletText;
