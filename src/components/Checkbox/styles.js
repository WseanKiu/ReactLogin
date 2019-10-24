import { StyleSheet } from 'react-native';

const BORDER_RADIUS = 4;
const BOX_HEIGHT = 18;
const BOX_WIDTH = 18;

export default StyleSheet.create({
    container: {
        marginTop: 10,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        marginHorizontal: 5,
    }
});