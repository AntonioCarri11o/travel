import React, {useState} from 'react'
import {StyleSheet, Text, View } from 'react-native'
import Modal from '../common/Modal'
import {Icon, ListItem} from 'react-native-elements'
import { map } from 'lodash'
import ChangeDisplayNameForm from './ChangeDisplayNameForm'
import ChangeDisplayPasswordForm from './ChangeDisplayPasswordForm'

export default function ProfileOptions(props) {
    const {onReload}=props;
    const [showModal, setshowModal] = useState(false);
    const [conteined, setConteined] = useState(null);
    const onClose=()=>setshowModal((prevState)=>!prevState);
    const selectComponent=(key)=>{
        if(key==="displayName"){
            setConteined(<ChangeDisplayNameForm close={onClose} onReload={onReload}/>);
        }
        if(key==="password"){
            setConteined(<ChangeDisplayPasswordForm close={onClose}/>);
        }
        onClose();
    }
    const optionsMenu=getOptions(selectComponent);
  return (
    <View>
      {map(optionsMenu,(option,index)=>(
        <ListItem key={index} onPress={option.onPress}>
            <Icon type='material-community'
            name={option.nameIconLeft}
            color={option.colorIcon} />
            <ListItem.Content>
                <ListItem.Title>{option.title}</ListItem.Title>
            </ListItem.Content>
            <Icon type={option.typeIcon}
            name={option.nameIconRight}
            color={option.colorIcon}/>
        </ListItem>
      ))}
      <Modal visible={showModal} close={onClose} >{conteined}</Modal>
    </View>
  )
}

function getOptions(selectComponent){
    return [
        {
            title:"Cambiar Nombre",
            typeIcon:"material-community",
            nameIconLeft:"account-circle",
            colorIcon:"#CCC",
            nameIconRight:"chevron-right",
            onPress:()=>selectComponent("displayName")
        },
        {
            title:"Cambiar Contraseña",
            typeIcon:"material-community",
            nameIconLeft:"lock-reset",
            colorIcon:"#CCC",
            nameIconRight:"chevron-right",
            onPress:()=>selectComponent("password")
        }
    ]
}
const styles = StyleSheet.create({})