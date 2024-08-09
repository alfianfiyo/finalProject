import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HairLine from '../hairlineWidth'
import { useSelector } from 'react-redux';
import formatNumber from '../../helpers/formatNumber';

export default function CardPayment() {

    const totalNominal = useSelector(state => state.total.totalNominal);
    
  return (
    <>
        <HairLine/>
        <View style={styles.container}>
            <View style={styles.Vleft}>
                <View>
                    <Text style={styles.textHeader}>Payment Sumary</Text>
                </View>
                <View style={styles.viewCenter}>
                    <View style={{ justifyContent:'space-between' }}>
                        <Text>Price</Text>
                        <Text>Dilevery Free</Text>
                        <Text>Service</Text>
                    </View>
                    <View style={{ justifyContent:'space-between' }}>
                        <Text style={styles.rightAlign}>{formatNumber(totalNominal)}</Text>
                        <Text style={styles.rightAlign}>0</Text>
                        <Text style={styles.rightAlign}>3.000</Text>
                    </View>
                </View>
                <View style={styles.viewCenter}>
                    <View>
                        <Text style={styles.textFooter}>Total Payment</Text>
                    </View>
                    <View>
                        <Text style={styles.textFooter}>{formatNumber(totalNominal)}</Text>
                    </View>
                </View>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:210,
        backgroundColor:'white',
    },
    textHeader:{
        paddingStart:10,
        paddingTop:10,
        paddingBottom:10,
        fontSize:20,
        fontWeight:'bold'
    },
    viewCenter:{
        flexDirection:'row',
        height:'40%',
        width:'95%',
        justifyContent:'space-between',
        // // backgroundColor:'white',
        paddingTop:5,
        paddingBottom:5,
        paddingStart:10
    },
    textFooter:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:20,
        fontWeight:'bold'
    },
    rightAlign:{
        textAlign:'right'
    }

})