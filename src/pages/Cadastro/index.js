import { View, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native' 
import { Ionicons } from '@expo/vector-icons';

import TextoNunito from '../../components/TextoNunito'
import TextoOpen from '../../components/TextoOpen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

export default function Cadastro() {

  const navigation = useNavigation();

  

  const [input, setInput] = useState('')
  const [hidePass, setHidePass] = useState(true)

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{flex: 1}}
      scrollEnabled={true}
      >

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo}source={require('../../../assets/images/adaptive-icon.png')}/>
      </View>

      <View style={styles.body}>

        <TextoNunito style={styles.titulo}>Crie sua conta</TextoNunito>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Nome de usuário'></TextInput>
          <TextInput style={styles.input} placeholder='Email'></TextInput>

          <View style={styles.input}>
            <TextInput 
              style={styles.senha} 
              placeholder='Senha'
              value={input}
              onChangeText={ texto => setInput(texto)}
              secureTextEntry={hidePass}
            />
      
            <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
                <Ionicons
                  name={hidePass ? 'eye' : 'eye-off'}
                  size={25}
                  color={'#3E5A33'}
                  />
            </TouchableOpacity>
          </View>
        </View>

         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.entrarButton}><TextoNunito style={styles.entrarText}>Cadastrar</TextoNunito></TouchableOpacity>
         </View>

          <TouchableOpacity 
          style={styles.esqueciSenhaButton}
          onPress={ () => navigation.navigate('Login')}><TextoOpen style={styles.esqueciSenhaText}>Já tenho uma conta</TextoOpen></TouchableOpacity>
      </View>
    </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FAFFF9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  logoContainer:{
    width: Width * 0.2,
    height: Height * 0.11,
  },

  body:{
    height: Height * 0.7,
    width: Width,
    paddingHorizontal: Width * 0.07,
    justifyContent: 'space-around',
    paddingVertical: Height * 0.06
  },

  titulo:{
    fontSize: 34,
    lineHeight: 42,
    fontWeight: 'bold',
    marginBottom: 12,

  },


  logo:{
    width: Width * 0.2,
    height: Height * 0.11,
    alignSelf: 'center'
  },

  inputContainer:{
    width: '100%',
    flex: 2,
    justifyContent: "space-around",
  },

  input:{
    backgroundColor: "#ffffff",
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#7E9F70',
    borderRadius: 10,
    paddingHorizontal: 11,
    color: '#061500',
    flexDirection: 'row'
  },

  senha:{
    width: '85%'
  },

  icon:{
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonContainer:{
    width: '100%',
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: Height * 0.05
  },

  entrarButton:{
    backgroundColor: '#7E9F70',
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 37
  },

  entrarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FAFFF9',
    
  },

  criarButton:{
    backgroundColor: '#FAFFF9',
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 37,
    borderWidth: 1,
    borderColor: '#7E9F70',
  },

  criarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#7E9F70',
    
  },

  esqueciSenhaButton:{
    borderBottomWidth: 1,
    borderBottomColor: '#061500',
    alignSelf: 'center'
  },

  esqueciSenhaText:{
    color: '#061500',
    fontSize: 16,
    lineHeight: 27
  },

  esqueciSenhaContainer:{
  }
})
