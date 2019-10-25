import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import SearchableDropdown from 'react-native-searchable-dropdown';

import styles from './styles';

const InputWithDropdown = ({ title = "", items = [], placeholder = "", err="", onChangeText, selectedItem }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SearchableDropdown
                onTextChange={text => onChangeText(text)}
                //On text change listner on the searchable input
                onItemSelect={item => selectedItem(item.name, item.password)}
                // containerStyle={styles.container}
                textInputStyle={styles.input}
                itemStyle={styles.dropdownItemStyle}
                itemsContainerStyle={{ maxHeight: '60%' }}
                items={items}
                placeholder={placeholder}
                resetValue={false}
                underlineColorAndroid="transparent" />
            <Text style={styles.errorText}>{err}</Text>
        </View>
    )
};

InputWithDropdown.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    placeholder: PropTypes.string,
    err: PropTypes.string,
    onChangeText: PropTypes.func,
    selectedItem: PropTypes.func,
}

export default InputWithDropdown;