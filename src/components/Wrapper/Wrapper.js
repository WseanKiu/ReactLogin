import React from 'react';
import { SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Wrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    )
};

Wrapper.propTypes = {
    children: PropTypes.any,
}

export default Wrapper;