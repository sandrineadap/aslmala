import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../../../utilities/globalStyles';
import Colors from '../../../utilities/Color';

const RadioButton = ({ title, selected }) => {
  return (
      <View style={styles.wrapper}>
        <View style={[
          selected ? [styles.radio, { borderColor: Colors.PRIMARY_BUTTON }]
            : [styles.radio]
        ]}>
          <View style={[selected ? [styles.radioBG] : []]} />
        </View>
        <Text style={[
          selected ? [[globalStyles.content, { color: Colors.PRIMARY_BUTTON, fontWeight: '700' }]]
            : [globalStyles.content]
        ]}>{title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: Colors.TEXT_SECONDARY,
    borderRadius: 10,
    borderWidth: 1.5,
    marginRight: 10
  },
  radioBG: {
    backgroundColor: Colors.PRIMARY_BUTTON,
    height: 14,
    width: 14,
    margin: 1.4,
    borderRadius: 10
  },
});

export { RadioButton };