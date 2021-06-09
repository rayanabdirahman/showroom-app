import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import AppNavigator from './app.navigator';

type NavigationContainerPropsList = {
  colorScheme?: ColorSchemeName;
  isUserSignedIn?: boolean;
};

function Navigation({
  colorScheme
}: NavigationContainerPropsList): JSX.Element {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
