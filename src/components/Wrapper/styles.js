import { StyleSheet, Dimensions } from 'react-native';


const WIDTH = (Dimensions.get('window').width / 100) * 90;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
});