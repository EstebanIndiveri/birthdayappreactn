import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionBar from './ActionBar'
import AddBirthday from './AddBirthday'

export default function ListBirthday() {
    const [showlist, setShowlist] = useState(true);
    return (
        <View style={styles.container}>
            {showlist?(
            <>
            <Text>ListBirthDay</Text>
            <Text>ListBirthDay</Text>
            <Text>ListBirthDay</Text>
            <Text>ListBirthDay</Text>
            <Text>ListBirthDay</Text>
            </>
            ):(
                <AddBirthday/>
            )}
            

            <ActionBar  setShowlist={setShowlist} showlist={showlist}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        height:'100%'
    }
})
