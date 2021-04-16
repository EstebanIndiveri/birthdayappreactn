import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function RegisterForm(props) {
    const{changeForm}=props
    return (
        <View>
            <Text style={{color:'white'}}>RegisterForm</Text>
              <TouchableOpacity
            onPress={changeForm}
            >
            <Text style={styles.btnText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color:'#FFF',
        fontSize:18,
    }
})
