import {StyleSheet} from 'react-native'

export default StyleCardMenus = StyleSheet.create({
    container : {
        // flex:1,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        justifyContent:'space-between',
        paddingStart:10,
        paddingEnd:10,
    },

    VText:{
        width:'60%',
    },

    VAdd:{
        marginTop:10, alignItems:'center'
    },
    VAdded:{
        flexDirection:'row', justifyContent:'space-between', marginTop:10
    },
    images:{
        width:120,
        height:120
    },
    TextName : {
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    },
    TextPrice : {
        paddingTop:15,
        // fontWeight:'bold',
        color:'black',
        fontSize:16
    },
    buttoAdd1:{
        backgroundColor: '#E67E22',
        width: '70%',
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttoAdd2:{
        backgroundColor: '#E67E22',
        width: 25,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonAdd0:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
    textButtonAdd1:{
        color:'white',
        fontSize:19,
        fontWeight:'bold'
    },
    textButtonAdd2:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    }
})