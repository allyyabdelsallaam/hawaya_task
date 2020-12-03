import React from 'react';
import { View, TextInput } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import style from './CountryPickerStyle';


export default function CountryTextInput({ countryCode, TextInputValue, onChangeText }) {
    return (
        <View style={style.container}>
            <CountryPicker
                containerButtonStyle={{ height: '90%', alignItems: 'center', justifyContent: 'center', borderBottomColor: '#A9A9A9', borderBottomWidth: 1 }}
                countryCode={countryCode}
                withCallingCodeButton={true}
                //withCountryNameButton={true}
                withCurrencyButton={true}
                withFlagButton={false}
                withCallingCode={true}
                withFlag={false} withEmoji={false} />
            <TextInput
                style={{height: '100%', width: '70%', borderBottomColor: '#A9A9A9', borderBottomWidth: 1 }}
                placeholder="Phone Number"
                keyboardType="number-pad"
                returnKeyType="done"
                value={TextInputValue}
                onChangeText={onChangeText} />
        </View>
    )
}