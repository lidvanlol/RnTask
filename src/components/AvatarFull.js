
import React,{useRef,useEffect} from 'react'
import { StyleSheet, Text, View,Dimensions,Animated,TouchableOpacity } from 'react-native'
  const {width, height} = Dimensions.get('window');
const AvatarFull = (props) => {
  const animationValue = useRef(new Animated.Value(0)).current;


  const {url, avatarShow} = props;
 
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

useEffect(() => {
 
  setTimeout(() => {
   Animated.timing(animationValue, {
     toValue: 0,
     duration: 1000,
     useNativeDriver: true,
   }).start(() => avatarShow(null));
  }, 2000);
}, []);





 const renderImage = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity onPress={() => avatarShow(null)} style={styles.container}>
      <Animated.Image
        onLoad={renderImage}
        style={[animatedStyle, styles.imgStyle]}
        source={{uri: url}}
      />
    </TouchableOpacity>
  );
}

export default AvatarFull

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imgStyle: {
    width: width,
    height: 300,

   
  },
});
