import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

export default function AddBirthday() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [formData, setFormData] = useState({})
    const [formError, setFormError] = useState({})
    const hiddeDatePicker=()=>{
        setDatePickerVisibility(false);
    }
    const handlerConfirm=(data)=>{
        const dateBirth=data;
        dateBirth.setHours(0);
        dateBirth.setMinutes(0);
        dateBirth.setSeconds(0);
        setFormData({
            ...formData,
            dateBirth
        })
        // console.log(dateBirth)
        hiddeDatePicker();
    }
    
    const showDatePicker=()=>{
        setDatePickerVisibility(true);
    }

    const onChange=(e,type)=>{
        setFormData({
            ...formData,
            [type]:e.nativeEvent.text
        })
    }

    const onSubmit=()=>{
        // console.log('enviando')
        // console.log(formData)
        let errors={};
        if(!formData.name|| !formData.lastname || formData.dateBirth.length==='0'){
            if(!formData.name)errors.name=true;
            if(!formData.lastname)errors.lastname=true;
            if(!formData.dateBirth)errors.dateBirth=true;
        }else{
            console.log('VAMONOS');
            console.log('a')
        }
        setFormError(errors);
    }

    return (
        <>
           <View style={styles.container}>
               <TextInput
               placeholder="Nombre"
               placeholderTextColor="#969696"
                style={[styles.input,formError.name&&{borderColor:'#940c0c'}]}
                onChange={(e)=>onChange(e,'name')}
               />
               <TextInput
               placeholder="Apellido"
               placeholderTextColor="#969696"
               style={[styles.input,formError.lastname&&{borderColor:'#940c0c'}]}
                onChange={(e)=>onChange(e,'lastname')}
                
               />
               <View style={[styles.input,styles.datepicker,formError.dateBirth&&{borderColor:'#940c0c'}]}>
                   <Text style={{color:formData.dateBirth?'#FFF':'#969696',fontSize:18}}
                   onPress={showDatePicker}
                   >{formData.dateBirth?moment(formData.dateBirth).format('LL'):(
                       "Fecha de nacimiento"
                   )}
                    </Text>
               </View>
               <TouchableOpacity
               onPress={onSubmit}
               >
                   <Text style={styles.addButton}>
                       Crear cumpleaños
                   </Text>
               </TouchableOpacity>
           </View>
           <DateTimePickerModal
           isVisible={isDatePickerVisible}
           mode='date'
           onConfirm={handlerConfirm}
           onCancel={hiddeDatePicker}
           />

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
    },
    datepicker:{
        justifyContent:'center',
    },
    textDate:{
        color:"#969696",
        fontSize:18
    },
    addButton:{
        fontSize:18,
        color:'#FFF',
    }
})
