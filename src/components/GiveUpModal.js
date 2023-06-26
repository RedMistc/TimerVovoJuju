import React from "react";
import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Image, TouchableOpacity, Text} from "react-native";
import TextoNunito from "./TextoNunito";
import { color } from "react-native-reanimated";
import TextoOpen from "./TextoOpen";
import { Ionicons } from '@expo/vector-icons';


const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;


export class GiveUpModal extends React.Component {
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

  handleGiveUp = () => {
    const { onPressButton } = this.props;
    if (onPressButton) {
      onPressButton();
    }

    this.close();
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
            gap: 30
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
                <TextoNunito style={styles.header}>Tem certeza que vai desistir, bem?</TextoNunito>

                <TextoOpen style={styles.body}>Cuidado, se desistir vai perder um abacate. {'\n'}
                    Como assim não gosta de abacate?
                </TextoOpen>
           </View>

           <TouchableOpacity
              style={styles.giveUpBtn}
              onPress={this.handleGiveUp}
            >
              <TextoNunito style={styles.giveUpText}>Desistir</TextoNunito>
            </TouchableOpacity>

           <Image style={styles.image} source={require('../../assets/images/desistir.png')}></Image>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
    content:{
        paddingHorizontal: Width * 0.08,
        gap: Height * 0.06,
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
    },

    giveUpBtn:{
        backgroundColor: '#E64848',
        height: Height * 0.07,
        width: Width * 0.35,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        zIndex: 2
    },

    giveUpText:{
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FAFFF9',
        fontSize: 20,
    }

})