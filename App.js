import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './utilities/Color';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 2}} />
      
      {/* Welcome to Sign-a-mander*/}

      <View style={[styles.splashWrapper, {flexDirection: 'column'}]}>
        <Text style={[styles.sectionTitle, {flex: 2}]}> Sign&#x2022;a&#x2022;mander</Text>
        <Text style={[styles.subTitle, {flex: 1}]}>ASL PRACTICE</Text>
        <Text style={[styles.content, {flex: 5}]}>
          Can Mandy Can Mandy recognize your signs? 
          Practice ASL by signing in front of the camera, 
          and Mandy will give you instant feedback on how you did! 
        </Text>
        {/* <View style={{flex: 2, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'darkorange'}}></View>
        <View style={{flex: 5, backgroundColor: 'green'}}></View> */}
        
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
    backgroundColor: '#8BBCFF',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  splashWrapper: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'stretch',
    // marginTop: 300,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',

    textAlign: 'center',
    textAlignVertical: 'bottom',
    // alignItems: 'bottom',
  },
  subTitle:{
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.TEXT_SECONDARY,
    letterSpacing: 3,

    textAlign: 'center',
    // textAlignVertical: 'center',
  },
  content: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttons: {},
});
