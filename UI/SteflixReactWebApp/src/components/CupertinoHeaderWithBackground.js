import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function CupertinoHeaderWithBackground(props) {
  return (
    <Container {...props}>
      <LeftWrapper>
        <LeftIconButton>
          <ButtonOverlay>
            <IoniconsIcon
              name="ios-arrow-back"
              style={{
                color: "#FFFFFF",
                fontSize: 32
              }}
            ></IoniconsIcon>
            <LeftText>Back</LeftText>
          </ButtonOverlay>
        </LeftIconButton>
      </LeftWrapper>
      <TextWrapper>
        <Title numberOfLines={1}>Title</Title>
      </TextWrapper>
      <RightWrapper>
        <Button>
          <ButtonOverlay>
            <IoniconsIcon
              name="ios-add"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: 32
              }}
            ></IoniconsIcon>
          </ButtonOverlay>
        </Button>
      </RightWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1EC8FF;
  padding-right: 8px;
  padding-left: 8px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const LeftWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const LeftIconButton = styled.div`
  flex-direction: row;
  border: none;
`;

const LeftText = styled.span`
  font-family: Arial;
  align-self: center;
  font-size: 17px;
  padding-left: 5px;
  color: #FFFFFF;
`;

const TextWrapper = styled.div`
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 600;
  line-height: 17px;
  color: #000;
`;

const RightWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const Button = styled.div`
  flex-direction: column;
  display: flex;
  border: none;
`;

export default CupertinoHeaderWithBackground;
