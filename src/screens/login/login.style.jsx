import {StyleSheet}  from 'react-native'

export const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1F1E',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textheader:{
        fontSize:100,
        fontWeight:'bold',
        color:'#F38F08',
    },

    inputView: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: "#393938",
        borderRadius: 15,
        width: "70%",
        height: 45,
        marginBottom: 20,
        paddingLeft:10
        // alignItems: "center",
    },

    TextInput: {
        // height: 50,
        // flex: 1,
        // padding: 10,
        // marginLeft: 20,
        color:'#CAC9C7'
    },

    forgot_button: {
        height: 25,
        color:'white',
        textDecorationLine:'underline'
    },

    loginBtn:
    {
      width:"70%",
      borderRadius:15,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      backgroundColor:"#F38F08",
    }
})