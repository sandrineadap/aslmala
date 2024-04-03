import { StyleSheet, Dimensions } from 'react-native';
import Colors from './utilities/Color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import RecordingScreen from './src/screens/RecordingScreen';
import 'expo-dev-client';

const Stack = createNativeStackNavigator();

/************ Main App ************/
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Record" component={RecordingScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;