/* eslint-disable */
import React from "react";
import { View, StyleSheet } from "react-native";
import File from "./File";
import Avatar from "./Avatar";

const Gist = ({ url, text }) => {


  return (
    <View style={styles.container}>
      <Avatar url={url} />
      <View style={styles.textStyle}>
        <File text={text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  textStyle: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Gist;
