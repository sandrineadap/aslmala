import { StyleSheet, ImageBackground, Image, Text, View, SafeAreaView, Alert, Dimensions } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import Button from '../components/atoms/Button';

export default function RecordingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}} />
      <View style={[{ flex: 5, flexDirection: 'column', marginHorizontal: 30, marginBottom: 100 }]}>
        <Text style={[globalStyles.sectionTitle, { flex: 1 }]}>Practice</Text>
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