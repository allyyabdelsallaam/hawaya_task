import React, { useState } from 'react';
import { View } from 'react-native';
import Background from '../../component/Background/Background';
import Button from '../../component/Button/Button';
import CountryTextInput from '../../component/CountryPicker/CountryPicker';
import style from './AuthStyle';


export default function Auth({ navigation }) {
    const [countryCode, setCountryCode] = useState('EG')
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    const [phoneNumberValue, setPhoneNumberValue] = useState('');

    return (
        <Background title={"What's your phone number?"}>
            <View style={style.contentStyle}>
                <View>
                    <CountryTextInput
                        TextInputValue={phoneNumberValue}
                        onChangeText={value => setPhoneNumberValue(value)}
                        countryCode={countryCode} />
                </View>
                <Button
                    disabled={phoneNumberValue.length > 9 ? false : true}
                    ButtonTitle={"Send Code"}
                    onPress={() => navigation.replace("Verification", { phoneNum: phoneNumberValue })}
                />
            </View>
        </Background>
    )
}