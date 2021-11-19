import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Home} from './src/pages/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </>
  );
};

export default App;
