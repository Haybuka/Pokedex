

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const Stack = createNativeStackNavigator();
import HomeScreen from './src/pages/pokedex/screen/homeScreen';
import AboutScreen from './src/pages/pokedex/screen/aboutScreen';



const queryClient = new QueryClient()

const Pokemon = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}

            options={
              ({ route }) => (
                {
                  title: route.params.name[0].toUpperCase() + route.params.name.slice(1),
                  headerTitleStyle: {
                    fontWeight: 'normal',
                  },
                  headerShown: false
                }
              )
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default Pokemon