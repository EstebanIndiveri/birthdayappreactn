import React, { Fragment, useEffect, useState } from 'react';

// import firebase from './src/utils/firebase';

import Auth from './src/components/Auth';

// import 'firebase/auth';

import { SafeAreaView,StyleSheet, StatusBar,YellowBox } from 'react-native'
// import {decode,encode} from 'base-64';
import ListBirthday from './src/components/ListBirthday';
// import {WebChannel} from '@firebase/webchannel-wrapper';

// if(!global.btoa)global.btoa=encode;
// if(!global.atob)global.atob=decode;

// YellowBox.ignoreWarnings(['Setting a timer'])


const App = () => {
  const [user, setUser] = useState(true);
  useEffect(()=>{
    // firebase.auth().onAuthStateChanged((response)=>{
    //   // console.log('usuario:log',response);
    //   setUser(response);
    // });
  },[]);
  if(user === undefined){
    return null;
  }

  return ( 
    <Fragment>
    {/* <StatusBar barStyle="light-content" translucent/> */}
    <StatusBar  backgroundColor="transparent" translucent barStyle="light-content"/>

    <SafeAreaView
    style={styles.background}
    >
      {user ?(
        // <Logout/>
        <ListBirthday/>
      ):(
        <Auth/>
      )
    }
    </SafeAreaView>
    </Fragment>
   );
}
 
export default App;

// const Logout=()=>{
//   const logout=()=>{
//     firebase.auth().signOut();
//   }
//   return(
//   <>
//     <View>
//     <Text>Estas logueado</Text>
//       <Button
//       onPress={logout}
//       title="Cerrar sesión"
//       />
//     </View>
//   </>
//   );
// }

const styles=StyleSheet.create({
    background:{
      backgroundColor:'#15212b',
      height:'100%',
      paddingTop:30,
    }
})