import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import { Input, Button,Icon} from 'react-native-elements'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Toast  from 'react-native-toast-message';
export default function ChangeDisplayPasswordForm(props) {
    const {close}=props;
    const [password, setPassword] = useState(false);
    const [newPassword,setNewPassword]=useState(false);
    const [repeatNewPassword,setRepeatNewPassword]=useState(false);
    const formik = useFormik({
        initialValues:{
          password:"",
          newPassword:"",
          repeatNewPassword:""
        },
        validationSchema:yup.object({
          password:yup.string().required("Contraseña obligatoria"),
          newPassword:yup.string().required("Nueva Contraseña Obligatoria"),
          repeatNewPassword:yup.string().required("Contraseña obligatoria")
          .oneOf([yup.ref("newPasswrod")],"Las nuevas contraseñas deben ser iguales"),
        }),
        validateOnChange:false,
        onSubmit: async(formValue)=>{
          try {
            console.log(formValue)
          } catch (error) {  
            console.log(error.message);
            Toast.show({
              type:"error",
              position:"bottom",
              text1:"Error al cambiar contraseña",
            })
          }
        }
      });

      const showPass=()=>{
        setPassword(!password);
    };
    const showNewPass=()=>{
        setNewPassword(!newPassword);
    }
    const showRepeatedPass=()=>{
        setRepeatNewPassword(!repeatNewPassword);
    }
  return (
    <View style={styles.viewForm}>
      <Input placeholder='Contraseña Actual' 
        secureTextEntry={password ? false:true} 
        containerStyle={styles.input} rightIcon={{type:"material-community",
        name:password ? "eye-off-outline":"eye-outline",color:"#c2c2c2",onPress:showPass}} 
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        errorMessage={formik.errors.password}/>

        <Input placeholder='Nueva contraseña' 
        secureTextEntry={newPassword ? false:true} 
        containerStyle={styles.input} rightIcon={{type:"material-community",
        name:newPassword ? "eye-off-outline":"eye-outline",color:"#c2c2c2",onPress:showNewPass}} 
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        errorMessage={formik.errors.newPassword}/>

        <Input placeholder='Confirmar nueva contraseña' 
        secureTextEntry={repeatNewPassword ? false:true} 
        containerStyle={styles.input} rightIcon={{type:"material-community",
        name:repeatNewPassword ? "eye-off-outline":"eye-outline",color:"#c2c2c2",onPress:showRepeatedPass}} 
        onChangeText={(text)=>formik.setFieldValue("password",text)}
        errorMessage={formik.errors.repeatNewPassword}/>
        <Button title={"Cambiar Nombre y Apellido"} containerStyle={styles.btnContainer} buttonStyle={styles.btnStyle} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
    </View>
  )
}

const styles = StyleSheet.create({})