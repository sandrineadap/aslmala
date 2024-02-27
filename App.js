import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Animated, SafeAreaView } from 'react-native';
import Colors from './utilities/Color';
import Button from './src/components/atoms/Button';

/************ Components ************/
const Button1 = ({title}) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 25,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={[styles.button, { backgroundColor: Colors.PRIMARY_BUTTON, opacity: animated}]}>
        <Text style={styles.buttonText}>{ title }</Text>
      </Animated.View>

    </Pressable>
  )
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

        <SafeAreaView style={{ flex: 4 }}>
          {/* This is where the buttons will go */}
          <Button1 title="PRACTICE 1"/>
          <Button
            onPress={() => {
              // handle button press event
            }}
            title = "PRACTICE"
            style={styles.customButton}
            textStyle={styles.CustomButtonText}
          />
        </SafeAreaView>
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
    textAlign: 'center',
    color: Colors.TEXT_SECONDARY,
    paddingHorizontal: 30,
    fontSize: 14,
  },
  button: {
    padding: 16,
    marginBottom: 12,
    flexDirection: 'column',
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default App;