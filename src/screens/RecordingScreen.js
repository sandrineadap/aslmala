import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import { Button } from '../components/atoms/Buttons';
import Colors from '../../utilities/Color';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ paddingTop: 50, paddingBottom: 40, paddingHorizontal: 30, flex: 1, flexDirection: 'column' }]}>
        <View style={[{ flex: 1 }]}>
          <Text style={[globalStyles.sectionTitle]}>Practice</Text>
          <Text style={[globalStyles.content, {marginTop: 15}]}>Center your torso in the sign box and press RECORD when you're ready to sign.</Text>
        </View>
        <Button
          onPress={() => {
            console.log("Recording ended. NEXT button pressed. Must send video to model.");
            navigation.navigate("WordSelect");
          }}
          title="RECORD / END / NEXT"
          style={[styles.customButton, { backgroundColor: Colors.ORANGE }]}
          textStyle={styles.customButtonText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
});