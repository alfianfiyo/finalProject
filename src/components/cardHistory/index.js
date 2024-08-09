import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import HairLine from '../hairlineWidth'
import formatNumber from '../../helpers/formatNumber'

export default function CardView({id_restaurant, date_order, name_restaurant, image, menu,total_pesanan}) {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.VImages}>
            <Image
                style={styles.images}
                source={{ uri: image }}
            />
        </View>
        <View style={styles.VText}>
            <Text style={styles.TextName}>{name_restaurant} </Text>
            <Text style={styles.TextDate}>{date_order}</Text>
            <Text style={styles.TextMenu}>{menu} </Text>
            <View style={{ marginTop:10 }}>
                <Text style={styles.TextDelivery}>Total : {formatNumber(total_pesanan)}</Text>
            </View>
        </View>
    </View>
    {/* <HairLine
        marginTop = '2'
        marginBottom = '2'
    /> */}
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        marginTop:6,
        borderRadius:5,
        backgroundColor:'white',
        flexDirection:'row',
        borderWidth: 2, 
        borderColor: '#D1D0CF', 
        elevation: 1,
    },
    
    VImages:{
        padding:10,
    },
    VText:{
        marginTop:5,
        width:'60%',
    },
    images:{
        borderRadius:2,
        width:130,
        height:100
    },
    TextName : {
        fontSize:16,
        fontWeight:'bold',
        // color:'black'
    },
    TextDate : {
        fontSize:12,
        fontWeight:'bold',
        // color:'black',
        marginBottom:5,
        marginTop:5
    },
    TextMenu : {
        // fontWeight:'bold'
        fontSize:10
    },
    TextDelivery : {
        fontWeight:'bold',
        // color:'black',
        fontSize:14
    },
})