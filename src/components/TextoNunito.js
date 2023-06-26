import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TextoNunito({ children, style }) {
    let textStyle = styles.regular
    
    if(style.fontWeight === 'semibold'){
        textStyle = styles.semiBold

    } else if (style.fontWeight === 'bold'){
        textStyle  = styles.bold
    }

  return (
      <Text style={[textStyle, style]}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    regular:{
        fontFamily: "NunitoRegular"
    },

    semiBold:{
        fontFamily: "NunitoSemiBold"
    },

    bold:{
        fontFamily: "NunitoBold",
    }
})