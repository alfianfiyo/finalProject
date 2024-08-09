import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import formatNumber from '../../helpers/formatNumber';
import { addFirestoreData } from '../../helpers/serviceFireBase/firestoreService';

export default function ButtonInBottom({thisOrder=false}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const totalNominal = useSelector(state => state.total.totalNominal);
    const totalJumlah = useSelector(state => state.total.totalJumlah);

    //id orders
    
    //ambil data dari store dataCart untuk di order
    const dataOrders = useSelector(state => state.dataCart.dataArrayCart);

    console.log('dataOrders cek ke 2', dataOrders)

    //add orders
    const addData = addFirestoreData();
    const addOrder = async () => {
        try {
            await addData.mutateAsync(dataOrders);
            // Lakukan sesuatu setelah berhasil menambahkan data
            dispatch({type:'RESET_DATA_MENU'});
            dispatch({type:'RESET_PESANAN'});
            dispatch({type:'RESET_TOTAL'});
            dispatch({type:'RESET_DATA_CART'});

            // Show alert for successful addition
            Alert.alert('Success', 'Pesanan anda telah diorder ', [
                {
                    text: 'OK',
                    onPress: () => {
                        // Navigate to 'Home' screen after the alert is dismissed
                        navigation.navigate('Home');
                    }
                }
            ]);
        } catch (error) {
            // Tangani kesalahan jika penambahan data gagal
            console.error('Gagal menambahkan data ke Firestore:', error);
        }
    }
  

  return (
    <View style={styles.container}>
        {thisOrder ? (
            <TouchableOpacity onPress={addOrder} style={styles.button2}>
                <View>
                    <Text style={styles.textOrder}>Order</Text>
                </View>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={ () => navigation.navigate('Cart')} style={styles.button}>
                <View style={styles.container2}>
                    <Text style={styles.textInButton}> {totalJumlah} Item (s)</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.textInButton}>Delivery from </Text>
                    <Text style={styles.textInButton}> Rp {formatNumber(totalNominal)} </Text>
                </View>
            </TouchableOpacity>
        )}
    </View>
        
  )
}

const styles = StyleSheet.create({
    container:{
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
    },
    container2:{
        flexDirection:'row', justifyContent:'space-between', paddingStart:15 
    },
    button:{
        backgroundColor:'#E67E22', padding:5, borderRadius:20
    },
    button2:{
        backgroundColor:'#E67E22', padding:15, borderRadius:20
    },
    textInButton:{
        color:'white', paddingEnd:10, fontSize:13
    },
    textOrder:{
        color:'white', paddingEnd:9, fontSize:14, fontWeight:'bold',textAlign:'center'
    }

})