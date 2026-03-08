  
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Nav from './routes/Nav';
//import Login from './Screens/login';
//import Signup_1 from './screens/Signup1';
//import Signup_2 from './screens/Signup2';
//import Signup_3 from './screens/Signup3';
//import Signup_4 from './screens/Signup4';
//import Home from './screens/Home';

const getFonts = () =>  Font.loadAsync({
  'nexa-light': require('./assets/fonts/Nexa-Light.otf'),
  'nexa-bold': require('./assets/fonts/Nexa-Bold.otf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Nav />
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}