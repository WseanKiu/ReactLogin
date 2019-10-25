import React from 'react';
import { SafeAreaView, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Wrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
};

Wrapper.propTypes = {
    children: PropTypes.any,
}

export default Wrapper;