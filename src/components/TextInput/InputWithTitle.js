import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const InputWithTitle = (props) => {
    const { title, err = "" } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} {...props} />
            <Text style={styles.errorText}>{err}</Text>
        </View>
    )
};

InputWithTitle.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
}

export default InputWithTitle;