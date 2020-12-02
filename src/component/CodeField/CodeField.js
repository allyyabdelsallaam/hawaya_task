import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import style from './CodeFieldStyle';


export default function CodeInput({ onChangeText, Navigation }) {

    const [value, setValue] = useState('');

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const ref = useBlurOnFulfill({ value, cellCount: 4 });

    return (
        <SafeAreaView style={style.root} >
            <CodeField
                value={value}
                ref={ref}
                cellCount={4}
                onChangeText={val => setValue(val)}
                rootStyle={style.codeFieldRoot}
                keyboardType="number-pad"
                returnKeyType="done"
                returnKeyLabel="done"
                blurOnSubmit={true}
                textContentType="oneTimeCode"
                onEndEditing={() => Navigation.replace("Profile")}
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[style.cellRoot, isFocused && style.focusCell]}>
                        <Text style={style.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}