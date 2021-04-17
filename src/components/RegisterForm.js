import React from 'react'
import { StyleSheet, Text, TouchableOpacity,TextInput,View } from 'react-native'

export default function RegisterForm(props) {
    const{changeForm}=props
    const register=()=>{
        console.log('registrand')
    }
    return (
        <>
            <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor='#969696'
            style={styles.input}
            />
            <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor='#969696'
            style={styles.input}
            />
            <TextInput
            placeholder="Repetir contraseña"
            placeholderTextColor='#969696'
            secureTextEntry={true}

            style={styles.input}
            />
            <TouchableOpacity
            onPress={register}
            >
            <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>

            <View style={styles.login}>
            <TouchableOpacity
            onPress={changeForm}
            
            >
            <Text style={styles.btnText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color:'#FFF',
        fontSize:18,
    },
    input:{
        height:50,
        color:'#FFF',
        width:'80%',
        marginBottom:25,
        backgroundColor:"#1e3040",
        paddingHorizontal:20,
        borderRadius:50,
        fontSize:18,
        borderWidth:1,
        borderColor:'#1e3040'
    },
    login:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:15
    }
})
