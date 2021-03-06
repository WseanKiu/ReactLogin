import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SolidColorButton = ({ text, onPress, disabled = false }) => (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled} >
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

SolidColorButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
}

export default SolidColorButton;