import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import CardCart from '../../components/cardCart'
import CardPayment from '../../components/cardPayment'
import ButtonInBottom from '../../components/buttonInBottom'
import { useSelector } from 'react-redux'

export default function Cart() {
  const [myMenu,setMyMenu] = useState([]);
  
  // ambil data dari redux
  const dataMenus = useSelector(state => state.dataGlobal.dataArrayMenu);
  // end
  const listMenu = useCallback( async () =>{
    const res =  await dataMenus
    setMyMenu(res)
  },[])
  
  useEffect(() =>{
    listMenu()
  },[])
  
  const render = ({item}) => {
    return (
        <View>
          <CardCart
            idRestaurant={item.idRestaurant}
            name_restaurant = {item.name_restaurant}
            image = {item.image}
            menu={item.menu}
            uri_image={item.images_menu}
            price = {item.price}
          />
        </View>
    );
  };

  return (
    <>
    {/* <ScrollView> */}
      <View style={{ backgroundColor:'white',marginTop:5 }}>
        <FlatList
            // scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            data={myMenu}
            renderItem={render}
            style={{ height: '60%' }} 
          />
      </View>
      <CardPayment/>
    {/* </ScrollView> */}
    <View style={{ height:'10%', backgroundColor:'white' }}>
      <ButtonInBottom 
        thisOrder={true}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({})