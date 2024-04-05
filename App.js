import { StyleSheet, Dimensions } from 'react-native';
import Colors from './utilities/Color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import RecordingScreen from './src/screens/RecordingScreen';
import WordSelection from './src/screens/WordSelection';
import Hooray from './src/screens/Hooray'
import Sorry from './src/screens/Sorry'

const Stack = createNativeStackNavigator();

/************ Main App ************/
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: true,
        headerBackVisible: true,
        headerTitle: "",
        headerTransparent: true,
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Record" component={RecordingScreen} /> 
        <Stack.Screen name="WordSelect" component={WordSelection} />
        <Stack.Screen name="Hooray" component={Hooray} />
        <Stack.Screen name="Sorry" component={Sorry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;