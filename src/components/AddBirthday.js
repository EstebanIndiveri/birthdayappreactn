import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddBirthday() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const hiddeDatePicker=()=>{
        setDatePickerVisibility(false);
    }
    const handlerConfirm=(data)=>{
        // setDatePickerVisibility(true);
        console.log(data);
        hiddeDatePicker();
    }
    
    const showDatePicker=()=>{
        setDatePickerVisibility(true);
    }

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
               <View style={[styles.input,styles.datepicker]}>
                   <Text style={styles.textDate}
                   onPress={showDatePicker}
                   >Fecha de nacimiento</Text>
               </View>
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
    }
})
