import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,Text,TextInput} from 'react-native'
// import firebase from '../utils/firebase'
import auth from '@react-native-firebase/auth';
import { validateEmail } from '../utils/Validations'

export default function LoginForm(props) {
    const{changeForm}=props
    const [formData, setFormData] = useState(defaultValue())
    const[formError,setFormError]=useState({})
    const login =()=>{
        let errors={};
        if(!formData.email||!formData.password){
            if(!formData.email)errors.email=true;
            if(!formData.password)errors.password=true;
        }else if(!validateEmail(formData.email)){
            errors.email=true;
        }else{
            auth()
                .signInWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    console.log('User & signed in!');
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
            // Login firebase
            // firebase.auth().signInWithEmailAndPassword(formData.email,formData.password).then(()=>{
            //     console.log('login');
            // }).catch(()=>{
            //     setFormError({
            //         email:true,
            //         password:true
            //     })
            // })

        }
        setFormError(errors);
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
            style={[styles.input,formError.email&&styles.errorInput]}
            onChange={(e)=>onChange(e,'email')}
            />   
            <TextInput
            placeholder="Contrase??a"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            style={[styles.input,formError.password&&styles.errorInput]}
            onChange={(e)=>onChange(e,'password')}
            />
              <TouchableOpacity
              onPress={login}
            >
            <Text style={styles.btnText}>Iniciar Sesi??n</Text>
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
    errorInput:{
        borderColor:"#940c0c",
        borderWidth:1,
    }
})
