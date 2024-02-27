import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import Colors from './utilities/Color';
import { Dimensions } from 'react-native';

/************ Components ************/
const PressableHighlightButton = ({title, onTap}) => {
  return (
    <Pressable
      onPress={onTap}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Colors.PRIMARY_BUTTON_PRESSED 
            : Colors.PRIMARY_BUTTON
        },
        styles.button
      ]}>
        <Text style={styles.buttonText}>{ title }</Text>
    </Pressable>
  );
}

/************ Main App ************/
const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }} />

      {/* Welcome to Sign-a-mander*/}

      <View style={[styles.splashWrapper, { flexDirection: 'column' }]}>
        <View style={[{ flex: 2, flexDirection: 'row' }]}>
          <Text style={[styles.sectionTitle, { flex: 1 }]}> Sign&#x2022;a&#x2022;mander</Text>
        </View>
        {/* <Text style={[styles.sectionTitle, {flex: 2}]}> Sign&#x2022;a&#x2022;mander</Text> */}
        <Text style={[styles.subTitle, { flex: 1 }]}>ASL PRACTICE</Text>
        <Text style={[styles.content, { flex: 2 }]}>
          Can Mandy recognize your signs?
          Practice ASL by signing in front of the camera,
          and Mandy will give you instant feedback on how you did!
        </Text>

        <View style={{ flex: 4 }}>
          {/* This is where the buttons will go */}
          <TouchableOpacity
            style={{
              backgroundColor: '#147EFB',
              padding: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: '#fff' }}>PRACTICE</Text>
          </TouchableOpacity>
          <Pressable
            onPress={() => {
              // setTimesPressed(current => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? Colors.PRIMARY_BUTTON_PRESSED : Colors.PRIMARY_BUTTON,
              },
              styles.wrapperCustom,
            ]}>
            {({ pressed }) => (
              <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me!'}</Text>
            )}
          </Pressable>
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
    // height: Dimensions.get('window').width * 0.09, // for android
    // lineHeight: Dimensions.get('window').width * 0.09, // for ios
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
    textAlign: 'left',
    color: Colors.TEXT_SECONDARY,
    paddingHorizontal: 30,
  },
  buttons: {},
});

export default App;