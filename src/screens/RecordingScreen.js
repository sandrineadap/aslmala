import { StyleSheet, ImageBackground, Image, Text, View, SafeAreaView, Alert, Dimensions } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import Button from '../components/atoms/Button';

export default function RecordingScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={[globalStyles.sectionTitle, { flex: 1 }]}>Practice</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
});