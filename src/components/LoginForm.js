import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,Text,TextInput} from 'react-native'
import firebase from '../utils/firebase'
import { validateEmail } from '../utils/Validations'

export default function LoginForm(props) {
    const{changeForm}=props
    const [formData, setFormData] = useState(defaultValue())
    const login =()=>{
        console.log('login starting')
        console.log(formData)
    }

    const onChange=(e,type)=>{
        setFormData({
            ...formData,
            [type]:e.nativeEvent.text
        })
    }

    return (
        <>
            <TextInput
            placeholder="Correo Electronico"
            placeholderTextColor="#969696"
            style={styles.input}
            onChange={(e)=>onChange(e,'email')}
            />   
            <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            style={styles.input}
            onChange={(e)=>onChange(e,'password')}
            />
              <TouchableOpacity
              onPress={login}
            >
            <Text style={styles.btnText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <View style={styles.register}>
            <TouchableOpacity
            onPress={changeForm}
            >
            <Text style={styles.btnText}>Regitrate</Text>
            </TouchableOpacity>
            </View>
        </>
    )
}

function defaultValue(){
    return{
        email:'',
        password:'',
    }
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
    register:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:15
    },
})
