import React, {useState} from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const sportsData = [
  {id: '1', name: 'Football'},
  {id: '2', name: 'Cricket'},
  {id: '3', name: 'Badminton'},
  {id: '4', name: 'Tennis'},
];

const SportsList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        selectedItem === item.id && styles.selectedItem,
      ]}
      onPress={() => setSelectedItem(item.id)}>
      <Text
        style={[styles.itemText, selectedItem === item.id && styles.boldText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={sportsData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    borderRadius: 10,
    borderWidth: 1,
    height: 35,
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    margin: 10,
  },
  selectedItem: {
    borderColor: 'green',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#C2C2C2',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SportsList;
