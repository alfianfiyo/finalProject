import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import {getFirestoreData} from '../../helpers/serviceFireBase/firestoreService';
import CardHistory from '../../components/cardHistory';

export default function History() {
  const [myHistory, setMyHistory] = useState({});
  
  const { data, isLoading, isError } = useQuery('orderFoody', () => getFirestoreData('orderFoody'));
  
  useEffect(() => {
    if ((!isLoading && !isError)) {

      if (Array.isArray(data) && data.length > 0) {
        // Group the array by "id"
        const groupedHistory = data.reduce((result, item) => {
          if (!result[item.id]) {
            result[item.id] = [];
          }
          result[item.id].push(item);
          return result;
        }, {});

        const transformedData = [];

        for (const key in groupedHistory) {
          groupedHistory[key].forEach(item => {
            const { date_order, id, image, jumlahPesanan, menu, name_restaurant, nominalPesanan } = item;

            const existingData = transformedData.find(data => data.id_restaurant === id && data.date_order === date_order);

            if (existingData) {
              existingData.data.menu += `, ${menu} ${jumlahPesanan}`;
              existingData.data.total_pesanan += nominalPesanan;
            } else {
              transformedData.push({
                data: {
                  image,
                  menu: `${menu} ${jumlahPesanan}`,
                  name_restaurant,
                  total_pesanan: nominalPesanan
                },
                date_order,
                id_restaurant: id
              });
            }
          });
        }

        setMyHistory(transformedData)
      }
    }
  },[data, isLoading, isError])
  
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }


  const renderHistory = ({ item }) => {
    return (
        <View>
          <CardHistory
            date_order ={item.date_order}
            name_restaurant = {item.data.name_restaurant}
            image = {item.data.image}
            menu={item.data.menu}
            total_pesanan = {item.data.total_pesanan}
            // long_delivery={''}
          />
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
         showsVerticalScrollIndicator={false}
         data={myHistory}
         renderItem={renderHistory}
        //  onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1, 
    marginTop:2,
    paddingBottom:10,
    // backgroundColor : '#D1D0CF',
    backgroundColor : 'white',
    alignItems:'center',


  }
})