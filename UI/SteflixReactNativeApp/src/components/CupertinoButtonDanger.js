import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonDanger(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.register}>{props.register || "Register"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  register: {
    color: "#fff",
    fontSize: 17,
    top: 0,
    left: 18
  }
});

export default CupertinoButtonDanger;
