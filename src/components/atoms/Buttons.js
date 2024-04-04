import React from "react";
import { StyleSheet, Text, View, Pressable, Animated } from "react-native";
import Colors from '../../../utilities/Color';

const Button = ({ title, onPress, disabled, style }) => {
    const animated = new Animated.Value(1);
    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 25,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Pressable 
            onPress={onPress}
            onPressIn={fadeIn} 
            onPressOut={fadeOut} 
            off={true}

        >
            <Animated.View
                style={[disabled ? [styles.disabledButton] : [styles.button, { opacity: animated }], style]}>
                <Text style={[disabled ? styles.disabledButtonText : styles.buttonText]}>{title}</Text>
            </Animated.View>

        </Pressable>
    );
};
const ButtonSecondary = ({ title, onPress, disabled, style }) => {
    const animated = new Animated.Value(1);
    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 25,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Pressable 
            onPress={onPress}
            onPressIn={fadeIn} 
            onPressOut={fadeOut} 
            disabled={disabled}
        >
            <Animated.View
                style={[disabled ? [styles.disabledButton, {opacity: animated}] : [styles.secondaryButton, { opacity: animated }], style]}>
                <Text style={[disabled ? styles.disabledButtonText : styles.secondaryButtonText]}>{title}</Text>
            </Animated.View>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.PRIMARY_BUTTON,
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        flexDirection: 'column',
        justifycontent: 'center',
        alightItems: 'center',
        width: "100%",
    },
    secondaryButton:{
        backgroundColor: Colors.SELECTED_BG_BLUE,
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        flexDirection: 'column',
        justifycontent: 'center',
        alightItems: 'center',
        width: "100%",
    },
    disabledButton: {
        backgroundColor: Colors.DISABLED_BUTTON,
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        flexDirection: 'column',
        justifycontent: 'center',
        alightItems: 'center',
        width: "100%",
    },
    buttonText: {
        color: Colors.WHITE,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
    secondaryButtonText: {
        color: Colors.SELECTED_BLUE,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
    disabledButtonText: {
        color: Colors.DISABLED_BUTTON_TEXT,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
});

export {
    Button, 
    ButtonSecondary
};