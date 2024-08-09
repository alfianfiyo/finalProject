import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonMap({navigation}) {
  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.button}>
                <View style={styles.container2}>
                    <Text style={styles.textInButton}>See Map</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        bottom: 10,
        alignItems:'center',
    },
    container2:{
        flexDirection:'row', justifyContent:'center', padding:7
    },
    button:{
        backgroundColor:'#E67E22', padding:5, borderRadius:20
    },
    textInButton:{
        color:'white', paddingEnd:10, fontSize:15, fontWeight:'bold'
    },
    button:{
        backgroundColor:'#E67E22', padding:5, borderRadius:20, width:'90%'
    }

})