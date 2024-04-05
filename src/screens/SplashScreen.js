import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigation } from '@react-navigation/native-stack'
import { StyleSheet, ImageBackground, Image, Text, View, Alert, Dimensions } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import Colors from '../../utilities/Color';
import { Button } from '../components/atoms/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground 
          source={require('./../../assets/splash_screen_bgx2.png')} 
          resizeMode="cover" 
          style={[styles.image, { width: '100%', height: "100%" }]}
          >
          <View style={{/* flex: 2 */ flex: 1 }} />

          <View style={{ flex: 4 }}>
            <View style={{ flex: 1 }} />
            <View style={[styles.card, {
              flex: 4, flexDirection: 'column'
            }]}>
              <View style={[{ flex: 2, flexDirection: 'row' }]}>
                <Text style={[globalStyles.sectionTitle,
                {
                  flex: 1,
                  alignSelf: 'flex-end', // for ios
                  textAlignVertical: 'bottom', // for android 
                  textAlign: 'center',
                }]}> Sign&#x2022;a&#x2022;mander</Text>
              </View>
              <Text style={[globalStyles.subTitle, { paddingBottom: 20 }]}>ASL PRACTICE</Text>
              <View style={{
                flex: 2,
                flexDirection: 'row',
                // backgroundColor: 'gainsboro'
              }}>
                <Text style={[globalStyles.content, {
                  flex: 1,
                  textAlign: 'center',
                  alignSelf: 'center',
                  paddingHorizontal: 30,
                  paddingBottom: 30
                  // backgroundColor: 'orange'
                }]}>
                  Can Mandy recognize your signs?
                  Practice ASL by signing in front of the camera,
                  and Mandy will give you instant feedback on how you did!
                </Text>
              </View>
              {/* <View style={styles.overlay}> */}
              <Image
                style={styles.mandy}
                resizeMode='contain'
                source={require('./../../assets/mandy.png')}
              />
              {/* </View> */}
              <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'flex-end', paddingBottom: 40 }}>
                  {/* This is where the buttons will go */}
                  <Button
                    onPress={() => navigation.navigate("Record")}
                    title="PRACTICE"
                    style={[styles.customButton]}
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
                </View>

              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* <StatusBar style="auto" /> */}
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
});