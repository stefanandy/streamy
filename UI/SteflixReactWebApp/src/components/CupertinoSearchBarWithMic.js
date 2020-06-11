import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function CupertinoSearchBarWithMic(props) {
  return (
    <Container {...props}>
      <InputBox>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={{
            alignSelf: "center",
            paddingRight: 5,
            paddingLeft: 5,
            color: "#FFF",
            fontSize: 20
          }}
        ></MaterialCommunityIconsIcon>
        <InputStyle placeholder="Search"></InputStyle>
      </InputBox>
      <RightIconButton>
        <ButtonOverlay>
          <RightButtonText>Cancel</RightButtonText>
        </ButtonOverlay>
      </RightIconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000;
  padding: 8px;
  padding-right: 0px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const InputBox = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  background-color: #404040;
  border-radius: 20px;
  display: flex;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  height: 32px;
  flex: 1 1 0%;
  align-self: flex-start;
  font-size: 15px;
  line-height: 15px;
  color: #FFF;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const RightIconButton = styled.div`
  align-items: center;
  padding: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const RightButtonText = styled.span`
  font-family: Roboto;
  font-size: 15px;
  color: #FFF;
`;

export default CupertinoSearchBarWithMic;
