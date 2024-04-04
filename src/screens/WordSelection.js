import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import globalStyles from '../../utilities/globalStyles';
import { Button, ButtonSecondary } from '../components/atoms/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from '../components/atoms/RadioButton';
import { RadioListItem } from '../components/molecules/RadioListItem';

export default function RecordingScreen() {
	const [selectedRadio, setSelectedRadio] = useState(-1)
	const predictions = [
		{
			id: 0,
			gloss: 'my',
		},
		{
			id: 1,
			gloss: 'your',
		},
		{
			id: 2,
			gloss: 'sorry',
		},
		{
			id: 3,
			gloss: 'thank you',
		},
		{
			id: 4,
			gloss: 'please',
		},
	]

	return (
		<SafeAreaView style={styles.container}>
			<View style={[{ paddingTop: 50, paddingBottom: 40, paddingHorizontal: 30, flex: 1, flexDirection: 'column' }]}>
				<Text style={[globalStyles.sectionTitle]}>Did you say this?</Text>
				<Text style={[globalStyles.content, { marginTop: 15 }]}>
					This is what Mandy thought you might have said. Select the word you meant to sign and tap NEXT!
				</Text>
				<View style={styles.words}>
					{/* Where the list of predictions will go. */}
					{/* <TouchableOpacity onPress={()=>setSelectedRadio(0)}>
						<RadioButton
							title="word"
							selected={selectedRadio==0}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>setSelectedRadio(1)}>
						<RadioButton
							title="word 2"
							selected={selectedRadio==1}
						/>
					</TouchableOpacity> */}
					<RadioListItem 
						liTitle='word'
						liSelected={false}
					/>
					{/* {
						predictions.map((item, index) =>
							<TouchableOpacity key={index} onPress={() => setSelectedRadio(0)}>
								<RadioButton
									title={item.gloss}
									selected={selectedRadio == item.id}
								/>
							</TouchableOpacity>)
					} */}
				</View>
				<View style={{ flex: 3, flexDirection: 'row' }}>
					<View style={{ flex: 1, alignSelf: 'flex-end' }}>
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
	words: {

	}
});