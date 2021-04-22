import React, { Fragment, useEffect, useState } from 'react';

// import firebase from './src/utils/firebase';

import Auth from './src/components/Auth';

import auth from '@react-native-firebase/auth';

// import 'firebase/auth';

import { SafeAreaView,StyleSheet, StatusBar,YellowBox,View,Text } from 'react-native'
// import {decode,encode} from 'base-64';
import ListBirthday from './src/components/ListBirthday';
// import {WebChannel} from '@firebase/webchannel-wrapper';

// if(!global.btoa)global.btoa=encode;
// if(!global.atob)global.atob=decode;

// YellowBox.ignoreWarnings(['Setting a timer'])


const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    // firebase.auth().onAuthStateChanged((response)=>{
    //   // console.log('usuario:log',response);
    //   setUser(response);
    // });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;

  },[]);
  
  if (initializing)return null;

  // if(!user){
  //   return(
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // };

  // if(user === undefined){
    // return null;
  // }

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