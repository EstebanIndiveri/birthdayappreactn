import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

export default function AddBirthday() {
    return (
        <>
           <View style={styles.container}>
               <TextInput
               placeholder="Nombre"
               placeholderTextColor="#969696"
                style={styles.input}
               />
               <TextInput
               placeholder="Apellido"
               placeholderTextColor="#969696"
                style={styles.input}
               />
               
           </View>

        </>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        height:50,
        color:'#FFF',
        width:'80%',
        marginBottom:25,
        backgroundColor:'#1e3040',
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        borderWidth:1,
        borderColor:'#1e3040'
    }
})
