import { View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';

import TextoNunito from '../../components/TextoNunito'
import TextoOpen from '../../components/TextoOpen'

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;


export default function Login() {

  const navigation = useNavigation();

  const [input, setInput] = useState('')
  const [hidePass, setHidePass] = useState(true)

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>

      <View style={styles.logoContainer}>
        <Image style={styles.logo}source={require('../../../assets/images/adaptive-icon.png')}/>
      </View>

      <View style={styles.body}>

        <TextoNunito style={styles.titulo}>Faça seu login para começar</TextoNunito>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Email'></TextInput>
          <View style={styles.input}>
            <TextInput 
              style={styles.senha} 
              placeholder='Senha'
              placeholderTextFamily='NunitoRegular'
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
          <TouchableOpacity 
          style={styles.entrarButton}
          onPress={ () => navigation.navigate('Main')}
          ><TextoNunito style={styles.entrarText}>Entrar</TextoNunito></TouchableOpacity>
          <TouchableOpacity 
          style={styles.criarButton}
          onPress={ () => navigation.navigate('Cadastro')}
          ><TextoNunito style={styles.criarText}>Criar conta</TextoNunito></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.esqueciSenhaButton}><TextoOpen style={styles.esqueciSenhaText}>Esqueci minha senha</TextoOpen></TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FAFFF9',
    flex: 1,
    justifyContent: 'center',
    flexShrink: 0,
    minHeight: '100%',
  },

  icon:{
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoContainer:{
    width: Width * 0.2,
    height: Height * 0.11,
    alignSelf: 'center'
  },

  body:{
    height: Height * 0.7,
    alignItems: "center",
    width: '100%',
    paddingHorizontal: Width * 0.07,
    justifyContent: 'space-around',
    paddingVertical: Height * 0.06,
    flexShrink: 0
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
    flex: 1,
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
    paddingVertical: '5%'
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
    borderBottomColor: '#061500'
  },

  esqueciSenhaText:{
    color: '#061500',
    fontSize: 16,
    lineHeight: 27
  },

  esqueciSenhaContainer:{
  }
})
