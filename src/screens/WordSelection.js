import { StyleSheet, Image, Text, View, Alert } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import { Button, ButtonSecondary } from '../components/atoms/Buttons';
import Colors from '../../utilities/Color';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[{ paddingTop: 50, paddingBottom: 40, paddingHorizontal: 30, flex: 1, flexDirection: 'column' }]}>
                <Text style={[globalStyles.sectionTitle, { flex: 1 }]}>Did you say this?</Text>

                <Button
                    onPress={() => {
                        console.log("NEXT button pressed.");
                        Alert.alert('Oops!', 'Please select a word first, or press \n\"I meant another word\"', [
                            {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed'),
                                style: 'cancel'
                            },
                        ]);
                    }}
                    disabled={true}
                    title="NEXT"
                    style={styles.customButton}
                    textStyle={styles.custombuttonText}
                />
                <ButtonSecondary
                    onPress={() => {
                        console.log("I MEANT ANOTHER WORD button pressed. Show keyboard for new word.");
                        // navigation.navigate("WordSelect");
                    }}
                    title="I MEANT ANOTHER WORD"
                    style={[styles.customButton ]}
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