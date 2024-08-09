import {Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { loginStyle } from './login.style'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Login({navigation}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    return (
    <View style={loginStyle.container}>
        <View style={{ marginBottom:20 }}>
            <Text style={loginStyle.textheader}>Foody</Text>
        </View>

        <View style={loginStyle.inputView}>
            <Icon name="user" size={24} color='white'/>
            <TextInput style={loginStyle.TextInput}
            placeholder='Username'
            placeholderTextColor="#CAC9C7" 
            />
        </View>

        <View style={loginStyle.inputView}>
            <Icon name="lock" size={24} color='white'/>
            <TextInput style={loginStyle.TextInput}
            placeholder='Password' 
            secureTextEntry={true}
            placeholderTextColor="#CAC9C7"
            />
        </View>

        <TouchableOpacity>
            <Text style={loginStyle.forgot_button}>Forgot Password?</Text> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('HomeNav')}} style={loginStyle.loginBtn}>
            <Text style={{ color:'white', fontWeight:'bold' }}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}