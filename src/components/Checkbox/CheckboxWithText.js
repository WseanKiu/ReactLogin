import React from 'react';
import {
    View, Text, TouchableOpacity, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const PURPLE = "#7A42F4";

const CheckboxWithText = ({ text = "", check = false, onPress }) => {
    
    let icon = `${Platform.OS === 'ios'? 'ios':'md'}-${check? 'checkbox':'square'}`;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={icon} size={30} color={PURPLE} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

CheckboxWithText.propTypes = {
    text: PropTypes.string,
    check: PropTypes.bool,
    onPress: PropTypes.func,
}

export default CheckboxWithText;