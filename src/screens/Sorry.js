import { StyleSheet, ImageBackground, Image, Text, View, Alert } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import Colors from '../../utilities/Color';
import { Button, ButtonSecondary } from '../components/atoms/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { preds } from '../data/prediction_list';


export default function Sorry({ route, navigation }) {
  const wordId = route.params;
  const predictions = preds;

  return (
    <View style={styles.backgroundContainer}>
      {/** swirly blue background */}
      <ImageBackground
        source={require('./../../assets/orange_bg.png')}
        resizeMode="cover"
        style={[styles.image, { width: '100%', height: "100%" }]}
      >
        {/** whitespace */}
        <View style={{ flex: 1 }} />

        {/** bottom content part */}
        <View style={{flex: 10}}>
          <View style={[{
            // paddingTop: 50,
            flexDirection: 'column',
            flex: 1,
            // backgroundColor: 'orange'
            }]}>

            {/* Mandy Card */}
            <ImageBackground
              source={require('./../../assets/card.png')}
              resizeMode='cover'
              style={[styles.image, { width: '100%', height: "100%" }]}
            >
              {/** whitespace */}
              <View style={{/* flex: 2 */ flex: 1 }} />

              {/** content */}
              <View style={{
                paddingTop: 50, 
                paddingBottom: 40,
                paddingHorizontal: 40,
                flex: 3,
                flexDirection: 'column',
                // backgroundColor: 'gray'
              }}>
                <Text style={[globalStyles.sectionTitle]}>Sorry :&#40;</Text>
                <Text style={[globalStyles.content, { marginTop: 15, }]}>
                  Mandy couldn't recognize your sign, but Mandy is still learning! Maybe try another word?
                </Text>


                {/* where the comparison vids will go */}
                <View style={{ flex: 8 }}>
                </View>

                {/* view for buttons*/}
                <View style={{ flex: 3, flexDirection: 'row' }}>
                  <View style={{ flex: 1, alignSelf: 'flex-end' }}>

                    {/* blue NEXT button */}
                    <Button
                      title="TRY ANOTHER WORD"
                      style={styles.customButton}
                      textStyle={styles.custombuttonText}
                      onPress={() => {
                        console.log("TRY ANOTHER WORD pressed.");
                        navigation.navigate("Record");
                      }}
                    />

                    {/* light blue I MEANT ANOTHER WORD BUTTON */}
                    <ButtonSecondary
                      title="BACK TO HOME"
                      style={[styles.customButton]}
                      textStyle={styles.customButtonText}
                      onPress={() => {
                        console.log("BACK TO HOME pressed.");
                        navigation.navigate("Splash");
                      }}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
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
});