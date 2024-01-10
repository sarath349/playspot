import React, {useEffect, useState, useRef} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './HomeStyle';
import Header from '../../common/Header';
import SportsList from '../../components/SpotList';
import Circles from '../../components/Circles';
import {VenueLoc} from '../Api/apiFunctions';
// import {BottomSheet} from '@gorhom/bottom-sheet'; // Correct import

const Home = () => {
  const [data, setData] = useState(null);
  // const bottomSheetRef = useRef(null); // Use useRef for bottom sheet reference

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await VenueLoc();
        console.log('response home', response);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // const openBottomSheet = () => {
  //   bottomSheetRef.current.expand(); // Open the bottom sheet
  // };

  const renderItem = ({item}) => (
    <View style={{padding: 16, backgroundColor: 'white'}}>
      <Text>{item.name}</Text>
      {/* Add more components to display other data */}
    </View>
  );

  if (!data) {
    return null; // or a loading indicator
  }

  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Header />
        <SportsList />
        {data && (
          <Circles
            resData={data}
            logos={data.map(item => item.logo)}
            kilometers={data.map(item => item.kilometres)}
          />
        )}

        {/* Add a button or any UI element to trigger the bottom sheet */}
        {/* <TouchableOpacity onPress={openBottomSheet}>
          <Text>Show Bottom Sheet</Text>
        </TouchableOpacity> */}

        {/* BottomSheet */}
        {/* <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={['25%', '50%', '75%']}
          handleComponent={() => (
            <View
              style={{height: 10, backgroundColor: 'gray', borderRadius: 5}}
            />
          )}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </BottomSheet> */}
      </View>
    </View>
  );
};

export default Home;
