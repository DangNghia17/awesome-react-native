/**
 * @format
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import HomePage from './src/pages/home/HomePage';
import LoginPage from "./src/pages/home/LoginPage";
import SignUpPage from "./src/pages/home/SignUpPage";


function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/*<HomePage/>*/}
      {/*<LoginPage/>*/}
      <SignUpPage/>
    </SafeAreaView>
  );
}

export default App;
