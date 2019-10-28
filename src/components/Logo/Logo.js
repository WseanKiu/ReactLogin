import React, { Component } from 'react';
import {
    View,
    Image,
    Keyboard,
    Animated,
    Platform,
    Dimensions,
} from 'react-native';

import styles from './styles';

const imageWidth = Dimensions.get('window').width - 80;
const smallLogoSize = imageWidth - 80;
const ANIMATION_DURATION = 250; // millis

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoWidth: new Animated.Value(imageWidth),
        };
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = () => {
        const { logoWidth } = this.state;
        Animated.parallel([
            Animated.timing(logoWidth, {
                toValue: smallLogoSize,
                duration: ANIMATION_DURATION,
            })
        ]).start();
    }

    keyboardWillHide = () => {
        const { logoWidth } = this.state;
        Animated.parallel([
            Animated.timing(logoWidth, {
                toValue: imageWidth,
                duration: ANIMATION_DURATION,
            })
        ]).start();
    }

    render() {
        const { logoWidth } = this.state;
        const imageStyles = [
            styles.imageContainer,
            { width: logoWidth },
        ];

        return (
            <View style={styles.container}>
                <Animated.Image
                    resizeMode="contain"
                    source={require('./images/logo.png')}
                    style={imageStyles} />
                <Image style={styles.imageContainer}
                    resizeMode="contain"
                    source={require('./images/logoText.png')} />
            </View>
        );
    }
}

export default Logo;