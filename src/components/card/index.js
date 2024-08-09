import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import HairLine from '../hairlineWidth'

export default function CardView({name,menu,uri_image,long_delivery}) {
  return (
        <View style={styles.container}>
            <View style={styles.VImages}>
                <Image
                    style={styles.images}
                    source={{ uri: uri_image }}
                />
            </View>
            <View style={styles.VText}>
                <Text style={styles.TextName}>{name}</Text>
                <Text style={styles.TextMenu}>{menu}</Text>
                <HairLine 
                    marginBottom={10}
                    marginTop={10}
                />
                <Text style={styles.TextDelivery}>{long_delivery}</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'row',
        marginBottom:25
        // backgroundColor:'red'
    },
    VImages:{
        padding:10,
    },
    VText:{
        justifyContent: 'center',
        width:'60%',
    },
    images:{
        width:130,
        height:100
    },
    TextName : {
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },
    TextMenu : {
        fontSize:11,
        // fontWeight:'bold'
    },
    TextDelivery : {
        fontWeight:'bold',
        color:'black',
        fontSize:12
    },
})