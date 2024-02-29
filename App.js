import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, Text, View, SafeAreaView, Alert, Dimensions } from 'react-native';
import Colors from './utilities/Color';
import Button from './src/components/atoms/Button';

/************ Main App ************/
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require('./assets/splash_screen_bgx2.png')} resizeMode="cover" style={[styles.image, { width: '100%', height: "100%" }]}>
          {/* <Image source={require('./assets/icon.png')} resizeMode="contain" style={[styles.image, {width: '50%', height: "50%"}]} /> */}
          <View style={{/* flex: 2 */ flex: 1 }} />

          {/* Welcome to Sign-a-mander*/}
          <View style={{ flex: 4 }}>
            <View style={{ flex: 1 }} />
            <View style={[styles.card, { flex: 4, flexDirection: 'column' }]}>
              <View style={[{ flex: 2, flexDirection: 'row' }]}>
                <Text style={[styles.sectionTitle, { flex: 1 }]}> Sign&#x2022;a&#x2022;mander</Text>
              </View>
              <Text style={[styles.subTitle, { flex: 1 }]}>ASL PRACTICE</Text>
              <Text style={[styles.content, { flex: 2 }]}>
                Can Mandy recognize your signs?
                Practice ASL by signing in front of the camera,
                and Mandy will give you instant feedback on how you did!
              </Text>
              {/* <View style={styles.overlay}> */}
              <Image
                style={styles.mandy}
                resizeMode='contain'
                source={require('./assets/mandy.png')}
              />
              {/* </View> */}
              <SafeAreaView style={{ flex: 4 }}>
                {/* This is where the buttons will go */}
                <Button
                  onPress={() => {
                    // handle button press event
                  }}
                  title="PRACTICE"
                  style={styles.customButton}
                  textStyle={styles.customButtonText}
                />
                <Button
                  onPress={() => {
                    Alert.alert('Coming Soon!', 'Stay tuned for Learn mode!', [
                      {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel'
                      },
                    ]);
                  }}
                  disabled={true}
                  title="LEARN"
                  style={styles.customButton}
                  textStyle={styles.custombuttonText}
                />
              </SafeAreaView>
            </View>
          </View>
        </ImageBackground>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mandy: {
    width: Dimensions.get('screen').width, 
    height: '100%', 
    position: 'absolute',
    bottom: (Dimensions.get('screen').height / 2.88) * 1
  },
  image: {
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // opacity: 0.5,
    // backgroundColor: '#000000',
    bottom: 0,

  },
  container: {
    flex: 1,
    backgroundColor: '#8BBCFF',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end', // for ios
  },
  card: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'stretch',
    paddingHorizontal: 20,
    // marginTop: 300,
    // alignItems: 'center',

  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.TEXT_PRIMARY,

    textAlign: 'center',
    alignSelf: 'flex-end', // for ios
    textAlignVertical: 'bottom', // for android
  },
  subTitle: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.TEXT_SECONDARY,
    letterSpacing: 3,

    textAlign: 'center',
    // textAlignVertical: 'center',
  },
  content: {
    // justifyContent: 'center',
    textAlign: 'center',
    color: Colors.TEXT_SECONDARY,
    paddingHorizontal: 30,
    fontSize: 14,
  },
});

export default App;