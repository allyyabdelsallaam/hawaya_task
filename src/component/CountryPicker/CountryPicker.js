import React from 'react';
import { View, TextInput } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import style from './CountryPickerStyle';


export default function CountryTextInput({ countryCode, TextInputValue, onChangeText }) {
    return (
        <View style={style.container}>
            <CountryPicker containerButtonStyle={{height: '100%', justifyContent: 'center'}} countryCode={countryCode} withCallingCodeButton={true} withCallingCode={true} withFlag={false} withEmoji={false} />
            <TextInput style={{textAlignVertical: 'center', height: '100%', paddingVertical: 15}} placeholder="Phone Number" value={TextInputValue} onChangeText={onChangeText} />
        </View>
    )
}