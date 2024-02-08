import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './utilities/Color';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Welcome to Sign-a-mander*/}
      <View style={styles.splashWrapper}>
        <Text style={styles.sectionTitle}> Sign&#x2022;a&#x2022;mander</Text>
        <Text style={styles.subTitle}>ASL PRACTICE</Text>

        <View style={styles.buttons}>
          {/* This is where the buttons will go */}
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  splashWrapper: {
    paddingTop: 300,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.TEXT_PRIMARY
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subTitle:{
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.TEXT_SECONDARY,
    letterSpacing: 3,
  },
  buttons: {},
});
