

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from './src/pages/pokedex/screen/homeScreen';
import AboutScreen from './src/pages/pokedex/screen/aboutScreen';





const Pokemon = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: ' ',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Pokemon
