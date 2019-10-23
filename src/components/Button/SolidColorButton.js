import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SolidColorButton = ({ text }) => (
    <TouchableOpacity style={styles.container}>
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

SolidColorButton.propTypes = {
    text: PropTypes.string,
}

export default SolidColorButton;