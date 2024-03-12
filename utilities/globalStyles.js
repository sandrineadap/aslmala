import { StyleSheet, Dimensions } from 'react-native'
import Colors from './Color';

const globalStyles = StyleSheet.create({
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.TEXT_PRIMARY,
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
})

export default globalStyles;