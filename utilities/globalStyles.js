import { StyleSheet } from 'react-native'
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
        textAlign: 'left',
        color: Colors.TEXT_SECONDARY,
        fontSize: 15,
        lineHeight: 22
        //paddingHorizontal: 30,

    },
})

export default globalStyles;