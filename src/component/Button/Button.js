import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './ButtonStyle';


export default function Button({ ButtonTitle, disabled, onPress }) {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={style.buttonContainer}>
            <LinearGradient style={style.buttonStyle} colors={disabled ? ["#D3D3D3", "#D3D3D3"] : ["#00EAAC", "#00EAAE", "#00DEEB"]}>
                <Text style={style.buttonTextStyle}>{ButtonTitle}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}