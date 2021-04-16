import React from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'

export default function LoginForm(props) {
    const{changeForm}=props
    return (
        <View>
            <Text style={{color:'#FFF'}}>Login Form</Text>
            {/* <Button
            title="Registrate"
            /> */}
            <TouchableOpacity
            onPress={changeForm}
            >
            <Text style={styles.btnText}>Regitrate</Text>
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
