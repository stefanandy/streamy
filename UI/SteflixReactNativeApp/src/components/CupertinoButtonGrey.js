import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

function CupertinoButtonGrey(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TextInput placeholder="Login" style={styles.textInput}></TextInput>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 12
  },
  textInput: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "poppins-500",
    width: 99,
    height: 21,
    left: 28,
    top: 0
  }
});

export default CupertinoButtonGrey;
