import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoSearchBarWithMic from "../components/CupertinoSearchBarWithMic";
import MaterialCardWithTextOverImage from "../components/MaterialCardWithTextOverImage";


function Movies(props) {
  return (
    <Container>
      <Image>
        <CupertinoSearchBarWithMic
          style={{
            height: 95,
            width: 811,
            marginTop: 85,
            marginLeft: 643
          }}
        ></CupertinoSearchBarWithMic>
        <MaterialCardWithTextOverImage
          style={{
            height: 359,
            width: 359,
            marginTop: 43,
            marginLeft: 213
          }}
        ></MaterialCardWithTextOverImage>
      </Image>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.div`
  width: 2113px;
  height: 100%;
  flex-direction: column;
  display: flex;
  margin-left: -58px;
  background-image: url(${require("../assets/images/fundalNegruHitman1.png")});
  background-size: cover;
`;

export default Movies;
