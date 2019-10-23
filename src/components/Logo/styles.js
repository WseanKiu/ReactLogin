import { StyleSheet, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width - 100;

export default StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 40,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
    },
});