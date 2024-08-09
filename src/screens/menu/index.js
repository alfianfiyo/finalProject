import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {useRoute} from '@react-navigation/native'
import CardView from '../../components/card';
import ButtonMap from '../../components/buttonMap';
import CardMenu from '../../components/cardMenus';
import ButtonInBottom from '../../components/buttonInBottom';
import { useSelector } from 'react-redux';

export default function Menu({navigation}) {
  const [myMenu,setMyMenu] = useState([]);

  const route = useRoute()
  const data = route.params?.data;  

  const totalJumlah = useSelector(state => state.total.totalJumlah);
  
  let menuString = "Menu....";

  if (Array.isArray(data.menus)) {
    menuString = data.menus.join(', ');
  }

  const dataMenus = data.menus.map((menu, index) => ({
    menu,
    images_menu: data.images_menu[index],
    price: data.price[index]
  }));

  const listMenu = useCallback( async () =>{
    const res =  await dataMenus
    setMyMenu(res)
  },[])
  
  useEffect(() =>{
    listMenu()
  },[totalJumlah,dataMenus])
  
const render = ({item}) => {
  return (
      <View>
        <CardMenu
          menu={item.menu}
          uri_image={item.images_menu}
          price = {item.price}
        />
      </View>
  );
};

  return (
    <>
    <View style={styles.container}>
        <View style={{ backgroundColor:'white' }}>
          <View style={{height:'24%' }}>
            <CardView
              name={data.name_restaurant}
              menu={menuString}
              uri_image={data.image}
              long_delivery={data?.long_delivery}
            />
          </View>
        
          <ButtonMap
            navigation={navigation}
          />
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={myMenu}
              renderItem={render}
              style={{ height: '68%' }} 
            />

        </View>
    </View>
    {totalJumlah > 0 ? (
      <View style={{ height:'10%', backgroundColor:'white'}}>
        <ButtonInBottom
          thisOrder={false} 
        />
      </View>
    ):(null)}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1 , 
    marginTop:5,
    // marginBottom:60
  }
})