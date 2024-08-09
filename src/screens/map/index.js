import { StyleSheet, Text, View,PermissionsAndroid } from 'react-native'
import React,{useState,useEffect,useCallback} from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default function Map() {
  const [location,setLocation] = useState(false);

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(position => {
        setLocation(position);
    })
  },[])

  const requestLocation = useCallback(async () => {
    // map
    const locationGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    //permission map
    if(locationGranted === 'granted'){
      console.log(locationGranted)
      getCurrentLocation();
    }
  },[getCurrentLocation])

  useEffect(() => {
    requestLocation()
  },[requestLocation])

  return (
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: location?.coords?.latitude ?? -3.988623,
         longitude: location?.coords?.longitude ?? 122.51224,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
      {/* <Marker coordinate={{ latitude:-3.988623, longitude:122.51224}}
        title='BPD Cabang Sao-sao'
        description='Kantor cabang Sao-sao' /> */}
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})