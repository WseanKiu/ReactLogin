import { StyleSheet } from 'react-native';

const BORDER_RADIUS = 4;
const BOX_HEIGHT = 12;
const BOX_WIDTH = 12;

export default StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    box: {
        borderRadius: BORDER_RADIUS,
        height: BOX_HEIGHT,
        width: BOX_WIDTH,
        backgroundColor: '#7A42F4',
    },
});