import { FlatList, ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { HomeStyle } from './home.style'
import CardView from '../../components/card'
import ButtonInBottom from '../../components/buttonInBottom';
import formatNumber from '../../helpers/formatNumber';
import { useQuery } from 'react-query';
import { getFirestoreData } from '../../helpers/serviceFireBase/firestoreService';
import { useDispatch,useSelector } from 'react-redux';

export default function Home({ navigation }) {
  const currentDate = new Date();

    // Options for formatting the date
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };

    // Format the date according to the options
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  const { data, isLoading, isError } = useQuery('getData', () => getFirestoreData('foodyMaster'));

  const [myList, setMyList] = useState([]);

  const dispatch = useDispatch();

  const totalJumlah = useSelector(state => state.total.totalJumlah);

  useEffect(() => {
    if (!isLoading && !isError) {

      setMyList(data);
      
      const dataMenus = data.map(item => {
        const idRestaurant = item.id;
        const name_restaurant = item.name_restaurant;
        const image = item.image;
        return item.menus.map((menu, index) => ({
          idRestaurant,
          name_restaurant,
          image,
          menu,
          images_menu: item.images_menu[index],
          price: item.price[index]
        }));
      });
      
      // Menggabungkan array
      const combineDataArray = dataMenus.reduce((result, current) => {
        return result.concat(current);
      }, []);
      
      // set data to store for data menu
      dispatch({ type: 'DATA_MENU',data:combineDataArray});
      // end
    }
  }, [data,dispatch, isLoading, isError, totalJumlah, formattedDate]);

  const renderRestaurant = ({ item }) => {

    let menuString = "Menu....";

    if (Array.isArray(item.menus)) {
      menuString = item.menus.join(', ');
    }

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Menu', { data: item })}>
        <View>
          <CardView
            name={item.name_restaurant}
            menu={menuString}
            uri_image={item.image}
            long_delivery={''}
          />
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }


  return (
    <>
      <View style={HomeStyle.container}>
        <View>
          <Text style={HomeStyle.textHeader}>Restaurant Disekitarmu</Text>
        </View>
        {/* <ScrollView> */}
          <View style={{ backgroundColor: 'white' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={myList}
              renderItem={renderRestaurant}
            />
          </View>
        {/* </ScrollView> */}
      </View>
      {totalJumlah > 0 ? (
        <View style={{ height: '10%', backgroundColor: 'white' }}>
          <ButtonInBottom
            TotalItem="5"
            Delivery="Gojek (PutGan)"
            TotalPrice={formatNumber('2000')}
          />
        </View>
      ):(null)}
    </>
  );
}

