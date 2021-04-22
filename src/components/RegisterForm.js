import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity,TextInput,View } from 'react-native'
import auth from '@react-native-firebase/auth';

// import firebase from '../utils/firebase';
import { validateEmail } from '../utils/Validations';

export default function RegisterForm(props) {
    const{changeForm}=props
    const [formData, setFormData] = useState(defaultValue());
    const [fomrError,setFormError]=useState({});
    const register=()=>{
        let errors={}
        if(!formData.email||!formData.password || !formData.repeatPassword){
            if(!formData.email)errors.email=true;
            if(!formData.password)errors.password=true;
            if(!formData.repeatPassword)errors.repeatPassword=true
        }else if(!validateEmail(formData.email)){
            errors.email=true;
        }else if(formData.password!==formData.repeatPassword){
            errors.password=true;
            errors.repeatPassword=true;
        }else if(formData.password.length<6){
            errors.repeatPassword=true;
            errors.password=true;
        }else{
            auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
            });
            
            // firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password).then(()=>{
            //     console.log('creadted')
            // }).catch(()=>{
            //     setFormError({
            //         email:true,
            //         password:true,
            //         repeatPassword:true
            //     });
            // })
        }

        setFormError(errors);
    }
    return (
        <>
            <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor='#969696'
            style={[styles.input,fomrError.email&&styles.errorInput]}
            keyboardType="email-address"
            onChange={e=>setFormData({...formData,email:e.nativeEvent.text})}
            />
            <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor='#969696'
            style={[styles.input,fomrError.password&&styles.errorInput]}
            onChange={e=>setFormData({...formData,password:e.nativeEvent.text})}


            />
            <TextInput
            placeholder="Repetir contraseña"
            placeholderTextColor='#969696'
            secureTextEntry={true}
            onChange={e=>setFormData({...formData,repeatPassword:e.nativeEvent.text})}
            style={[styles.input,fomrError.repeatPassword&&styles.errorInput]}
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

function defaultValue(){
    return{
        email:'',
        password:'',
        repeatPassword:'',
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
    login:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:15
    },
    errorInput:{
        borderColor:"#940c0c",
        borderWidth:1,
    }
})
