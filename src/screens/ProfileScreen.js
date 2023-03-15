import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import {getAuth,signOut}from 'firebase/auth'
import {useNavigation} from '@react-navigation/native'
import ProfileInfo from '../components/account/ProfileInfo'
import Loading from '../components/common/Loading'
import ProfileOptions from '../components/account/ProfileOptions'
export default function ProfileScreen() {
    const navigation = useNavigation();
    const [visibleLoading, setVisibleLoading] = useState(false);
    const [textLoading,setTextLoading] = useState('');
    const [reload, setReload] =useState(false);
    const onReload=()=>setReload((prevState)=>!prevState);
    const cerrarSesion= async()=>{
        const auth=getAuth();
        console.log(auth);
        await signOut(auth);//elimina la sesion
        navigation.navigate('index',{screen:'index'});
        
    }
  return (
    <View>
      <ProfileInfo setTextLoading={setTextLoading} setVisibleLoading={setVisibleLoading} style={styles.cont}/>
      <ProfileOptions onReload={onReload}/>
      <Button 
      title={"Cerrar sesión"} 
      onPress={cerrarSesion} 
      buttonStyle={styles.button} 
      titleStyle={styles.title}
      />

      <Loading visible={visibleLoading} text={textLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#C80000",
        width:"80%",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:"#e3e3e3",
        borderBottomColor:"#e3e3e3",
        marginTop:30,
        alignSelf:"center",
        paddingVertical:10,

    },
    title:{
        color:"#fff"
    },
    cont:{
      color:"#000"
    }
})