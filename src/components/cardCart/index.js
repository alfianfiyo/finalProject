import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native'
import HairLine from '../hairlineWidth'
import cardCartStyle from './cardCart.style'; 
import React, {useState, useEffect} from 'react'
import formatNumber from '../../helpers/formatNumber';
import { useSelector, useDispatch } from 'react-redux';
import formatDate from '../../helpers/functions/formatDate';


export default function CardCart  ({idRestaurant, name_restaurant, image, menu,uri_image,price}) {
    
    const dispatch = useDispatch();

    const currentDate = new Date();

    // function formatDate(date) {
    //     const months = [
    //         "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    //         "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    //     ];
        
    //     const day = date.getDate();
    //     const month = months[date.getMonth()];
    //     const year = date.getFullYear();
        
    //     return `${day} ${month} ${year}`;
    // }

    // // Options for formatting the date
    // const options = {
    //     day: 'numeric',
    //     month: 'long',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     timeZoneName: 'short'
    // };

    // // Format the date according to the options
    // const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    const jumlahPesanan = useSelector(state => state.menu[menu]?.jumlahPesanan || 0);
    const nominalPesanan = useSelector(state => state.menu[menu]?.jumlahHarga || 0);
    
    const tambahPesanan = (jumlah, hargaPerItem) => {
        dispatch({ type: 'TAMBAH_PESANAN', menu, jumlah, hargaPerItem });
        dispatch({ type: 'UPDATE_TOTAL', jumlah, hargaPerItem,});
    };
    const kuranganiPesanan = (jumlah, hargaPerItem) => {
        if (jumlahPesanan > 0) {
            dispatch({ type: 'KURANGI_PESANAN', menu, jumlah, hargaPerItem });
            dispatch({ type: 'UPDATE_TOTAL_KURANG', jumlah, hargaPerItem,});
        }
    };

    const resetPesanan = () => {
        dispatch({ type: 'RESET_PESANAN' });
        dispatch({ type: 'RESET_TOTAL' });
    };

    useEffect(() => {
        if (jumlahPesanan > 0) {
            const arrCart = [
                {
                    'id': idRestaurant,
                    'name_restaurant' : name_restaurant,
                    'image' : image,
                    'menu': menu,
                    'jumlahPesanan': jumlahPesanan,
                    'nominalPesanan': nominalPesanan,
                    'date_order' : formatDate(currentDate)
                }
            ];

            dispatch({ type: 'DATA_CART', data: arrCart });
        }
    }, [jumlahPesanan, dispatch, menu, idRestaurant, nominalPesanan]);

    return (
        <View style={cardCartStyle.container}>
                {jumlahPesanan > 0 ? (
                    <>
                    <View style={cardCartStyle.VText}>
                        <Text style={cardCartStyle.TextName}>{menu}</Text>
                        <Text style={cardCartStyle.TextMenu}> A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file.</Text>
                        {/* <HairLine/> */}
                        <Text style={cardCartStyle.TextPrice}>{formatNumber(price)}</Text>
                    </View>
                    <View>
                        <Image
                            style={cardCartStyle.images}
                            source={{ uri: uri_image }}
                        />
                        <View style={cardCartStyle.VAdded}>
                            <TouchableOpacity onPress={()=> kuranganiPesanan(1,price)} style={cardCartStyle.buttoAdd2}><Text style={cardCartStyle.textButtonAdd1}>-</Text></TouchableOpacity>
                            <Text style={cardCartStyle.textButtonAdd2}>{jumlahPesanan}</Text>
                            <TouchableOpacity onPress={()=> tambahPesanan(1,price)} style={cardCartStyle.buttoAdd2}><Text style={cardCartStyle.textButtonAdd1}>+</Text></TouchableOpacity>
                        </View>

                    </View>
                    </>
                ):(null)}
        </View>
        
    )
  };
