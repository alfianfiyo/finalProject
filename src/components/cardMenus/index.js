import { Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native'
import HairLine from '../hairlineWidth'
import cardMenusStyle from './cardMenus.style';
import React, {useState} from 'react'
import formatNumber from '../../helpers/formatNumber';
import { useSelector, useDispatch } from 'react-redux';


export default function CardMenu  ({menu,uri_image,price}) {
    const [showFirstCode, setShowFirstCode] = useState(true);

    const jumlahPesanan = useSelector(state => state.menu[menu]?.jumlahPesanan || 0);

    const dispatch = useDispatch();
    
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
    

    const showAdded = () => {
        setShowFirstCode(!showFirstCode);
    };
    

    return (
        <View style={cardMenusStyle.container}>
            <View style={cardMenusStyle.VText}>
                <Text style={cardMenusStyle.TextName}>{menu}</Text>
                <Text style={cardMenusStyle.TextMenu}> A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file.</Text>
                {/* <HairLine/> */}
                <Text style={cardMenusStyle.TextPrice}>{formatNumber(price)}</Text>
            </View>
            <View>
                <Image
                    style={cardMenusStyle.images}
                    source={{ uri: uri_image }}
                />
                {showFirstCode ? (
                    jumlahPesanan > 0? (
                        <View style={cardMenusStyle.VAdded}>
                            <TouchableOpacity onPress={()=> kuranganiPesanan(1,price)} style={cardMenusStyle.buttoAdd2}><Text style={cardMenusStyle.textButtonAdd1}>-</Text></TouchableOpacity>
                            <Text style={cardMenusStyle.textButtonAdd2}>{jumlahPesanan}</Text>
                            <TouchableOpacity onPress={()=> tambahPesanan(1,price)} style={cardMenusStyle.buttoAdd2}><Text style={cardMenusStyle.textButtonAdd1}>+</Text></TouchableOpacity>
                        </View>
                    ):(
                        <View style={cardMenusStyle.VAdd}>
                            <TouchableOpacity onPress={showAdded} style={cardMenusStyle.buttoAdd1}><Text style={cardMenusStyle.textButtonAdd0}>Add</Text></TouchableOpacity>
                        </View>
                    ) 
                ):(
                    <View style={cardMenusStyle.VAdded}>
                        <TouchableOpacity onPress={()=> kuranganiPesanan(1,price)} style={cardMenusStyle.buttoAdd2}><Text style={cardMenusStyle.textButtonAdd1}>-</Text></TouchableOpacity>
                        <Text style={cardMenusStyle.textButtonAdd2}>{jumlahPesanan}</Text>
                        <TouchableOpacity onPress={()=> tambahPesanan(1,price)} style={cardMenusStyle.buttoAdd2}><Text style={cardMenusStyle.textButtonAdd1}>+</Text></TouchableOpacity>
                    </View>
                )}

            </View>
        </View>
    )
  };
