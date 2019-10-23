import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 47;
const BORDER_RADIUS = 4;

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    input: {
        marginTop: 5,
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        borderColor: '#7A42F4',
        borderWidth: 1,
        paddingHorizontal: 15,
        fontSize: 14,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        fontStyle: 'italic',
    }
});