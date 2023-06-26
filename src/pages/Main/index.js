import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider'

import TextoOpen from '../../components/TextoOpen'
import {StorePopUp} from '../../components/StorePopUp';

import { AvocadoModal } from '../../components/AvocadoModal';
import { GiveUpModal } from '../../components/GiveUpModal';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;


export default function Main() {
    
  const [avocadoCounter, setAvocadoCounter] = useState(5)

  const ref = useRef(null)

  const navigation = useNavigation();

  let popupRef = React.createRef()

  let AvocadoRef = React.createRef()
  
  let GiveUpRef = React.createRef()

  const onShowStore = () => {
        popupRef.show()
   }

   const onCloseStore = () => {
    popupRef.close()
}


   const onShowAvocado = () => {
    AvocadoRef.show()
}

    const onCloseAvocado = () => {
    AvocadoRef.close()
}

const onShowGiveUp = () => {
    GiveUpRef.show()
}

    const onCloseGiveUp = () => {
    GiveUpRef.close()
}

const onConfirmClose2 = () => {
    AvocadoRef.close();
};
   
   const [imageSource, setImageSource] = useState(require('../../../assets/images/vovojuju1.png'));

    const changeImage = (newImageSource) => {
        setImageSource(newImageSource);
    };

  return ( 
    
    <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, justifyContent: "space-between"}}
        style={{backgroundColor: '#FAFFF9'}}
    >
        <View style={styles.container}>

            <TouchableOpacity style={styles.counterContainer}  onPress= {onShowAvocado}>
                <Image style={styles.counterLogo} source={require('../../../assets/images/logo-abacate.png')}/>
                <TextoOpen style={styles.counter}>{avocadoCounter}</TextoOpen>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.imgContainer}  onPress= {onShowStore}>
                <Image style={styles.vovoImg} source={imageSource} resizeMode="contain"/>
            </TouchableOpacity>

            <Counter />

            <StorePopUp 
                ref={(target) => popupRef = target}
                onTouchOutside={onCloseStore}
                onImageChange={changeImage}
            />

            <AvocadoModal 
                ref={(target) => AvocadoRef = target}
                onTouchOutside={onCloseAvocado}
                onPressClose={onConfirmClose2}
            />

        </View>

        
    </KeyboardAwareScrollView>

  )


  function Counter(){


    const [range, setRange] = useState(45);
    const [activeStatus, setActiveStatus] = useState(false);

    const onConfirmGiveUp = () => {
        setActiveStatus(false);
        if (avocadoCounter > 0) {
          setAvocadoCounter(avocadoCounter - 1);
        }
        GiveUpRef.close();
    };

    const onConfirmClose1 = () => {
        GiveUpRef.close();
    };

    if(!activeStatus){
        return (
            <View style={styles.timer}>
                    
                    <TextoOpen style={styles.textCounter}>{Math.floor(range).toString().padStart(2, '0') + ':00'}</TextoOpen>
                    
                    <View style={styles.sliderContainer}>
                        <View style={styles.slideerContainer}>
                            <View
                                style={[
                                    styles.track1,
                                    { width: `${range * 1.67}%` },
                                    { backgroundColor: '#A7C99A' },
                                ]}
                            />
                            
    
                            <View
                                style={[
                                    styles.track2,
                                    { width: `${100 - (range * 1.67)}%` },
                                    { backgroundColor: '#E4F0E2' },
                                ]}
                            />
    
                            <Slider 
                                style={styles.slider}
                                value={range}
                                onValueChange={(value)=> setRange(value)}
                                minimumValue={0}
                                maximumValue={60}
                                minimumTrackTintColor='#A7C99A'
                                maximumTrackTintColor='#E4F0E2'
                                thumbStyle={{width: 30, height: 30}}
                                thumbImage={require('../../../assets/images/abacateSlider.png')}
                            /> 
                        </View>
    
                        <TouchableOpacity style={styles.playBtn}
                        onPress={()=>{
                            setActiveStatus(true)
                        }}>
                            <Ionicons
                                style={styles.playImg}
                                name={ 'play'}
                                size={25}
                                color={'#FAFFF9'}
                            />
                        </TouchableOpacity>

                        
                    </View>
                </View>
        )
    } else {
        return(
            
            <View style={styles.timer}>
                        
                {/* <TextoOpen style={styles.textCounter}>{Math.floor(range) + ':00'}</TextoOpen> */}
                    <CountdownTimer initialTime={Math.floor(range) * 60}/>
                        
                <View style={styles.btnContainer}>
                     <TouchableOpacity style={styles.playBtn} onPress={onShowGiveUp}
                       
                    >
                        <Ionicons
                            style={styles.playImg}
                            name={ 'stop'}
                            size={25}
                            color={'#FAFFF9'}
                        />
                    </TouchableOpacity>

                    <GiveUpModal
                        ref={(target) => GiveUpRef = target}
                        onPressButton={onConfirmGiveUp}
                        onPressClose={onConfirmClose1}
                    />
                </View>
                    
            </View>
            
        )
    }

    function CountdownTimer({ initialTime }) {
        const [time, setTime] = useState(initialTime);
      
        useEffect(() => {
          const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
          }, 1000);
      
    
          return () => clearInterval(timer);
        }, []);
      
        useEffect(() => {
          if (time === 0 ) {
            setAvocadoCounter(avocadoCounter + 1)
            setActiveStatus(false)
            
          }
        }, [time]);
      
    
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
      
    
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;
      
        return <TextoOpen style={styles.textCounter}>{formattedTime}</TextoOpen>;
      }
    
} 
}






const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        height: Height
    },

    counter:{
        fontWeight: 'regular',
        fontSize: 18,
        flex: 1,
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        paddingRight: '10%'
    },

    counterLogo:{
        width: '30%',
        height: Height/20.5 ,
        marginLeft: '10%',
        bottom: 5,
        zIndex: 2,

    },

    counterContainer:{
        backgroundColor: '#CDDECA',
        width: Width * 0.3,
        height: Height/20 ,
        borderRadius: 100,
        overflow: 'visible',
        top: Height/12,
        left: Width/15,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 3
    },

    imgContainer:{
        flex: 1,
        alignSelf: 'center',
        width: '64%'
    },

    vovoImg:{
        flex: 1,
        alignSelf: 'center',
        width: '100%'
    },

    textCounter:{
        fontWeight: 'light',
        color: '#1B3810',
        fontSize: 58,
        alignSelf: 'center',
        marginBottom: 15
    },

    sliderContainer:{
        width: '90%',
        backgroundColor: '#E4F0E2',
        borderRadius: 100,
        height: Height * 0.08,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    btnContainer:{
        width: '90%',
        backgroundColor: 'transparent',
        borderRadius: 100,
        height: Height * 0.08,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    slideerContainer:{
        width:'64%',
        height: '25%',
        borderRadius: 10,
        overflow:'visible',
        alignSelf: 'center',
        borderColor: '#7E9F70',
        borderWidth: 2
        
    },

    slider:{
        width: '100%',
        height: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },

    track1: {
        height: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderRadius: 10,
    },
    
    track2: {
        height: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        borderRadius: 10,
    },

    playBtn:{
        width: '15%',
        height: '76%',
        backgroundColor: '#89362E',
        borderRadius: 100,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center'
    },  

    timer:{
        bottom: Height/18,
        maxHeight: Height/3
    }

})