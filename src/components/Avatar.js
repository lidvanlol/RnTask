
import React,{useRef} from 'react'
import { StyleSheet,Animated } from 'react-native'

const Avatar = (props) => {
  const animationValue = useRef(new Animated.Value(0)).current;
 
  const {url} = props;
  
  const renderImage = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  
  const animatedStyle = {
    opacity: animationValue,
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.1, 1],
        }),
      },
    ],
  };
  return (
    <Animated.Image
      onLoad={renderImage}
      style={[styles.imgStyle, animatedStyle]}
      source={{uri: url}}
    />
  );
};

export default Avatar

const styles = StyleSheet.create({
  imgStyle: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 25,
  },
});
