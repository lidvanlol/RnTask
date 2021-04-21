/* eslint-disable */
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const File = ({ text }) => {


  return(
    <Text style={styles.txtStyle}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 15,
    lineHeight:18
  }
});

export default File;
