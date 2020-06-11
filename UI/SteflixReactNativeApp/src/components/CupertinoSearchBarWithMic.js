import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBarWithMic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <Icon name="magnify" style={styles.inputLeftIcon}></Icon>
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.inputStyle}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
        <Text style={styles.rightButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 8,
    paddingRight: 0
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#404040",
    borderRadius: 20
  },
  inputLeftIcon: {
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  inputStyle: {
    height: 32,
    flex: 1,
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 15,
    color: "#FFF"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightButtonText: {
    fontSize: 15,
    color: "#FFF"
  }
});

export default CupertinoSearchBarWithMic;
