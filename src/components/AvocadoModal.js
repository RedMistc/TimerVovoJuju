import React from "react";
import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import TextoNunito from "./TextoNunito";
import { color } from "react-native-reanimated";
import TextoOpen from "./TextoOpen";
import { Ionicons } from '@expo/vector-icons';


const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;


export class AvocadoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };


  handleClose = () => {
    const { onPressClose } = this.props;
    if (onPressClose) {
      onPressClose();
    }

    this.close();
  };

  

  render() {
    let { show } = this.state;

    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#DEFBD9",
          }}
        >
             <TouchableOpacity
              style={styles.closeBtn}
              onPress={this.handleClose}
            >
                <Ionicons
                    name={ 'close'}
                    size={35}
                    color={'#1F371B'}
                />

            </TouchableOpacity>
            
            <View style={styles.content}>
                <TextoNunito style={styles.header}>Para que servem os abacates?</TextoNunito>

                <TextoOpen style={styles.body}>Além de fazer bem e deixar o cabelo bonito,{'\n'}
        os abacates servem como moedas, ou seja, a cada timer completo você ganha um, porém se nao terminar vai perder abacate bem.
                </TextoOpen>
           </View>

           <Image style={styles.image} source={require('../../assets/images/Abacates.png')}></Image>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
    content:{
        paddingHorizontal: Width * 0.08,
        gap: Height * 0.1,
        marginTop: Height * 0.2
    },

    header:{
        fontWeight: 'bold',
        color: '#1F371B',
        fontSize: 34,
        lineHeight: 42
    },

    body:{
        fontWeight: 'regular',
        fontSize: 18,
        lineHeight: 27
    },

    image:{
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: -120
    },

    closeBtn:{
        position: 'absolute',
        top: Width * 0.08,
        right: Width * 0.05
    }

})