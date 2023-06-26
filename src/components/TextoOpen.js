import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TextoOpen({ children, style }) {
    let textStyle = styles.regular
    
    if(style.fontWeight === 'semibold'){
        textStyle = styles.semiBold

    } else if (style.fontWeight === 'bold'){
        textStyle  = styles.bold
    } else if (
        textStyle = styles.light
    )

  return (
      <Text style={[textStyle, style]}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    regular:{
        fontFamily: "OpenRegular"
    },

    semiBold:{
        fontFamily: "OpenSemiBold"
    },

    bold:{
        fontFamily: "OpenBold",
    },

    light:{
        fontFamily: "OpenLight"
    }
})