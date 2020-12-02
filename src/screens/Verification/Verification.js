import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Background from '../../component/Background/Background';
import CodeInput from '../../component/CodeField/CodeField';
import Button from '../../component/Button/Button';


export default function Verification({ navigation, route }) {
    const { phoneNum } = route.params
    const [value, setValue] = useState('');
    return (
        <Background
            title={"What's the verification code"}
            subtitle={`Code sent to ${phoneNum}`}
        >
            <CodeInput Navigation={navigation} />
            {/* <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '50%'}}>
                <Button
                    //disabled={phoneNumberValue.length > 9 ? false : true}
                    ButtonTitle={"Send Code"}
                    onPress={() => navigation.replace("Verification")}
                />
            </View> */}
        </Background>
    )
}