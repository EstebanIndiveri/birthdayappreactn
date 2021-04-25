import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

export default function Birthday(props) {
    const{item}=props;
    const pasat=item.days>0 ?true:false;
    const infoDay=()=>{
        if(item.days===0){
            return(
                <Text style={{color:'#FFF'}}>Es su cumpleaños</Text>
            )
        }else{
            const days=-item.days;
            return(
                <View style={styles.textCurrent}>
                    <Text>{days}</Text>
                    <Text>{days===1?'Día':'Dias'}</Text>
                </View>
            )
        }
    }
    return (
        <TouchableOpacity style={[styles.card,pasat?styles.pasat:item.days===0?styles.actual:styles.current]}>
            <Text style={styles.userName}>{item.name} {item.lastname}</Text>
            {pasat?(<Text style={{color:'#FFF'}}>Pasado</Text>):(
                infoDay()
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:80,
        alignItems:'center',
        paddingHorizontal:10,
        margin:10,
        borderRadius:15
    },
    pasat:{
        backgroundColor:"#820000"
    },
    current:{
        backgroundColor:'#1ae1f2'
    },
    actual:{
        backgroundColor:'#559204'
    },
    userName:{
        color:'#FFF',
        fontSize:16,
    },
    textCurrent:{
        backgroundColor:'#FFF',
        borderRadius:20,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    }
})
