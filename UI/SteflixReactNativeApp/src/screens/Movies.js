import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import CupertinoSearchBarWithMic from "../components/CupertinoSearchBarWithMic";
import MaterialCardWithTextOverImage from "../components/MaterialCardWithTextOverImage";

function Movies(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/fundalNegruHitman1.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <CupertinoSearchBarWithMic
          style={styles.searchBar}
        ></CupertinoSearchBarWithMic>
        <MaterialCardWithTextOverImage
          style={styles.movieCard}
        ></MaterialCardWithTextOverImage>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: 2113,
    height: 1164,
    marginLeft: -58
  },
  image_imageStyle: {},
  searchBar: {
    height: 95,
    width: 811,
    marginTop: 85,
    marginLeft: 643
  },
  movieCard: {
    height: 359,
    width: 359,
    marginTop: 43,
    marginLeft: 213
  }
});

export default Movies;
