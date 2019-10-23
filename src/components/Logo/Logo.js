import React from 'react';
import { 
    View, 
    Image,
} from 'react-native';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image style={styles.imageContainer}
            resizeMode="contain"
            source={require('./images/logo.png')} />
        <Image style={styles.imageContainer}
            resizeMode="contain"
            source={require('./images/logoText.png')} />
    </View>
);

export default Logo;