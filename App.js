  
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import SignNav from './routes/SignNav'
//import Login from './Screens/login';
//import Signup_1 from './Screens/signup1';
//import Signup_2 from './Screens/signup2';
//import Signup_3 from './Screens/signup3';
//import Signup_4 from './Screens/signup4';

const getFonts = () =>  Font.loadAsync({
  'nexa-light': require('./assets/fonts/Nexa-Light.otf'),
  'nexa-bold': require('./assets/fonts/Nexa-Bold.otf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <SignNav />
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}