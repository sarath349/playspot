import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import Images from '../assets/Images';

const Circles = ({resData}) => {
  const {width, height} = Dimensions.get('window');
  const circleRadii = [width * 0.11, width * 0.22, width * 0.33, width * 0.44]; // Adjust these percentages as per your requirements
  const positions = [
    {top: 0, left: width * 0.22},
    {top: width * 0.11, right: width * 0.33},
    {bottom: width * 0.25, left: width * 0.25},
    {top: width * 0.44, right: width * 0.44},
  ];
  const sortedDataKM = resData.sort((a, b) => a.kilometres - b.kilometres);
  return (
    <View style={styles.container}>
      {circleRadii.map((radius, index) => (
        <View
          key={index}
          style={[
            styles.circle,
            {width: radius * 2, height: radius * 2},
          ]}></View>
      ))}
      <Image source={Images.cr7} style={styles.roundedImage} />
      {sortedDataKM &&
        sortedDataKM.slice(0, 4).map((item, index) => (
          <View
            key={index}
            style={{
              position: 'absolute',
              ...positions[index],
            }}>
            <Text>IMAGE</Text>
            <Text>{item.kilometres}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.3,
  },
  circle: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#93E5AC',
    margin: 5,
    position: 'absolute',
  },
  roundedImage: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: (Dimensions.get('window').width * 0.05) / 2,
    backgroundColor: 'grey',
    position: 'absolute',
    zIndex: 1,
  },
});

export default Circles;
