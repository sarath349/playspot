import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Route from './navigation/Route';
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <Route />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
