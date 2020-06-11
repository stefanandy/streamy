import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithContent(props) {
  return (
    <Container {...props}>
      <CardItem1Style>
        <HeaderStyle>
          <LeftImage
            src={require("../assets/images/cardImage.png")}
          ></LeftImage>
          <HeaderContent>
            <TextStyle>Title</TextStyle>
            <NoteTextStyle>Subhead</NoteTextStyle>
          </HeaderContent>
        </HeaderStyle>
      </CardItem1Style>
      <CardItemImagePlace
        src={require("../assets/images/cardImage1.png")}
      ></CardItemImagePlace>
      <Body>
        <BodyText>
          BuilderX is a screen design tool which codes React Native for you.
        </BodyText>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color: #FFF;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const CardItem1Style = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 72px;
  display: flex;
`;

const HeaderStyle = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  align-items: center;
  display: flex;
`;

const LeftImage = styled.img`
  height: 40px;
  width: 100%;
  border-radius: 20px;
`;

const HeaderContent = styled.div`
  padding-left: 16px;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const TextStyle = styled.span`
  font-family: Roboto;
  font-size: 16px;
  color: #000;
  line-height: 20px;
`;

const NoteTextStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
`;

const CardItemImagePlace = styled.img`
  background-color: #ccc;
  flex: 1 1 0%;
  min-height: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 16px;
  flex-direction: column;
  display: flex;
`;

const BodyText = styled.span`
  font-family: Arial;
  line-height: 20px;
  font-size: 14px;
  color: #424242;
`;

export default MaterialCardWithContent;
