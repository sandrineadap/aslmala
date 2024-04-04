import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../../../utilities/globalStyles';
import Colors from '../../../utilities/Color';
import { RadioButton } from '../atoms/RadioButton';

const RadioListItem = ({ liTitle, liSelected }) => {
  return (
    <View style={styles.wrapper}>
      <RadioButton
        title={liTitle}
        selected={liSelected}
        style={{flex: 1}}
      />
      <View style={styles.line}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'left',
    paddingVertical: 14
  },
  line: {
    flex: 1,
    borderBottomColor: '#E8E8E8',
    marginVertical: 16,
    borderWidth: StyleSheet.hairlineWidth,
    // borderWidth: 3,
    backgroundColor: 'blue',
    alignSelf:'stretch'
  }
});

export { RadioListItem };