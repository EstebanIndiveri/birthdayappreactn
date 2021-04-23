import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionBar from './ActionBar'
import AddBirthday from './AddBirthday'
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

export default function ListBirthday(props) {
    const {user}=props;
    const [showlist, setShowlist] = useState(true);
    const [birthDay,setBirthday]=useState([]);
    const [pastBirthday, setPastBirthday] = useState([]); 

    useEffect(() => {
        setBirthday([]);
        setBirthday([]);
        firestore()
        .collection(user.uid)
        .orderBy('dateBirth','asc').get()
        .then(documentSnapshot => {
            const itemArray=[];
            documentSnapshot.forEach((doc)=>{
                // Arranca el array de docs
                const data=doc.data();
                data.id=doc.id;
                itemArray.push(data);
            });
            // setBirthday(itemArray);
            formatData(itemArray);
        });
    }, []);

    const formatData=(items)=>{
        const currentDate=moment().set({
            hour:0,
            minute:0,
            second:0,
            millisecond:0
        });
        const birthDayTempArray=[];
        const pasatBirthDayTempArray=[];

        items.forEach((item)=>{
            const dateBirth=new Date(item.dateBirth.seconds*1000);
            const dateBirthday=moment(dateBirth);
            const currentYear=moment().get('year');
            dateBirthday.set({year:currentYear});

            const diffDate=currentDate.diff(dateBirthday,'days');
            const itemTemp=item;
            itemTemp.dateBirth=dateBirthday;
            itemTemp.days=diffDate

            if(diffDate<=0){
                birthDayTempArray.push(itemTemp);
            }else{
                pasatBirthDayTempArray.push(itemTemp)
            }
            setBirthday(birthDayTempArray);
            setPastBirthday(pasatBirthDayTempArray);
        });
    }

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
                <AddBirthday user={user} setShowlist={setShowlist}/>
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
