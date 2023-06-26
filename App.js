import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { NavigationContainer } from '@react-navigation/native';
import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_300Light } from '@expo-google-fonts/open-sans'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GestureHandlerRootView} from 'react-native-gesture-handler'

import Routes from './src/routes';

export default function App() {
  const [loadedFont] = useFonts({
    "NunitoRegular": NunitoSans_400Regular,
    "NunitoSemibold": NunitoSans_600SemiBold,
    "NunitoBold": NunitoSans_700Bold,
    "OpenRegular": OpenSans_400Regular,
    "OpenSemiBold": OpenSans_600SemiBold,
    "OpenBold": OpenSans_700Bold,
    "OpenLight": OpenSans_300Light
  });

  if (!loadedFont){
    return <View></View>
  }

  return ( 
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
          <StatusBar backgroundColor={"#FAFFF9"} style='dark'/>
          <Routes/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


