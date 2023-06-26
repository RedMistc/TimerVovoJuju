import React from "react";
import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Image, TouchableOpacity} from "react-native";

const Height = Dimensions.get("window").height;



export class StorePopUp extends React.Component {
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


  handleClick1 = () => {
    const newImageSource = require('../../assets/images/vovojuju1.png');
    this.props.onImageChange(newImageSource);
  };


  handleClick2 = () => {
    const newImageSource = require('../../assets/images/mcjuju.png');
    this.props.onImageChange(newImageSource);
  };

  handleClick3 = () => {
    const newImageSource = require('../../assets/images/patojuju.png');
    this.props.onImageChange(newImageSource);
  };



  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%" }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }

  

  render() {
    let { show } = this.state;
    const { onTouchOutside } = this.props;

    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000AA",
            justifyContent: "flex-end",
          }}
        >
          {this.renderOutsideTouchable(onTouchOutside)}

          <View
            style={{
              backgroundColor: "#F4E3E1",
              width: "100%",
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingHorizontal: 10,
              height: Height * 0.4,
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={styles.cardContainer} onPress={this.handleClick1}>
                <Image style={styles.card} source={require('../../assets/images/Card11.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer} onPress={this.handleClick2}>
                <Image style={styles.card} source={require('../../assets/images/Card2.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer} onPress={this.handleClick3}>
                <Image style={styles.card} source={require('../../assets/images/Card3.png')}></Image>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
    cardContainer:{
        width: 93,
        height: 140,
        alignSelf: 'center',
        shadowColor: 'black',

    },

    card:{
        width: 93,
        height: 140,
        resizeMode: 'contain'
    }
})