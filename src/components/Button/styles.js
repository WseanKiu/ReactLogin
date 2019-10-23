import { StyleSheet } from 'react-native';

const BUTTON_HEIGHT = 45;
const BORDER_RADIUS = 4;

export default StyleSheet.create({
    container: {
        marginTop: 40,
        width: '90%',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        backgroundColor: '#7A42F4',
        height: BUTTON_HEIGHT,
        borderRadius: BORDER_RADIUS,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});