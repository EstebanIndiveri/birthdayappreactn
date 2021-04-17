import React, { Fragment, useEffect, useState } from 'react';
import firebase from './src/utils/firebase';
import Auth from './src/components/Auth';
import 'firebase/auth';
import { SafeAreaView,Text,View,StyleSheet, StatusBar, Button } from 'react-native'

const App = () => {
  const [user, setUser] = useState(undefined);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((response)=>{
      // console.log('usuario:log',response);
      setUser(response);
    });
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
        <Logout/>
      ):(
        <Auth/>
      )
    }
    </SafeAreaView>
    </Fragment>
   );
}
 
export default App;

const Logout=()=>{
  const logout=()=>{
    firebase.auth().signOut();
  }
  return(
  <>
    <View>
    <Text>Estas logueado</Text>
      <Button
      onPress={logout}
      title="Cerrar sesión"
      />
    </View>
  </>
  );
}

const styles=StyleSheet.create({
    background:{
      backgroundColor:'#15212b',
      height:'100%',
      paddingTop:30,
    }
})