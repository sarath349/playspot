import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function header({title}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.plcLoc}>
        <Ionicons name="location-sharp" size={30} />
        <View>
          <Text style={styles.title}>Kozhikode</Text>

          <Text>kerala,india</Text>
        </View>
      </View>
      <Ionicons name="menu" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {
    fontSize: 17,

    fontWeight: '500',
    color: '#333333',
  },
  plcLoc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
