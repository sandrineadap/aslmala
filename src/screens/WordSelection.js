import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert, ScrollView } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import { Button, ButtonSecondary } from '../components/atoms/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioListItem } from '../components/molecules/RadioListItem';
import { preds } from '../data/prediction_list';

export default function RecordingScreen({ navigation }) {
	const [selectedRadio, setSelectedRadio] = useState(-1);
	// const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
	// const predictions = shuffle(preds);
	const predictions = preds;

	return (
		<SafeAreaView style={styles.container}>
			<View style={[{
				paddingTop: 50,
				paddingBottom: 40,
				paddingHorizontal: 30,
				flexDirection: 'column',
				flex: 1,
			}]}>
				<Text style={[globalStyles.sectionTitle]}>Did you say this?</Text>
				<Text style={[globalStyles.content, { marginTop: 15 }]}>
					This is what Mandy thought you might have said. Select the word you meant to sign and tap NEXT!
				</Text>

				{/* view for scrolling list of predictions */}
				<View style={{flex: 8}}>
					<ScrollView style={styles.predList}>
						{/* List of predictions */}
						{
							predictions.map((item, index) =>
								<TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)} >
									<RadioListItem
										liTitle={item.gloss}
										liSelected={selectedRadio == item.id}
									/>
								</TouchableOpacity>)
						}
					</ScrollView>
				</View>

				<View style={{ flex: 3, flexDirection: 'row' }}>
					<View style={{ flex: 1, alignSelf: 'flex-end' }}>

						{/* blue NEXT button */}
						<Button
							disabled={selectedRadio == -1}
							title="NEXT"
							style={styles.customButton}
							textStyle={styles.custombuttonText}
							onPress={() => {
								if (selectedRadio == -1) {
									console.log("Disabled button pressed.");
									Alert.alert('Oops!', 'Please select a word first, or press \n\"I meant another word\"', [
										{
											text: 'OK',
											onPress: () => console.log('OK Pressed'),
											style: 'cancel'
										},
									]);
								} else {
									console.log("NEXT button pressed. WordId is " + selectedRadio);
									navigation.navigate("Hooray", selectedRadio);
								}
							}}
						/>

						{/* light blue I MEANT ANOTHER WORD BUTTON */}
						<ButtonSecondary
							onPress={() => {
								console.log("I MEANT ANOTHER WORD button pressed. Show keyboard for new word.");
								// navigation.navigate("WordSelect");
							}}
							title="I MEANT ANOTHER WORD"
							style={[styles.customButton]}
							textStyle={styles.customButtonText}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//alignItems: 'center',
	},
	predList: {
		paddingVertical: 10,
	}
});