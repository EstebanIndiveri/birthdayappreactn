import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import firebase from '../utils/firebase'
import auth from '@react-native-firebase/auth';

export default function ActionBar(props) {
    const{setShowlist,showlist}=props;
    const handleSignOut=()=>{
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    return (
        <View style={styles.viewFooter}>
            <View style={styles.viewClose}>
                <Text style={styles.text}
                onPress={()=>handleSignOut()}
                >Cerrar Sesión</Text>
            </View>
            <View style={styles.viewAdd}>
                <Text style={styles.text} onPress={()=>setShowlist(!showlist)}>
                    {showlist?'Nueva Fecha':'Cancelar fecha'}
                    </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        width:'100%',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        marginBottom:30,
    },
    viewClose:{
        backgroundColor:'#820000',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30
    },
    text:{
        fontSize:16,
        color:'#FFF',
        textAlign:'center'
    },
    viewAdd:{
        backgroundColor:'#1ea1f2',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30,
    }
})
