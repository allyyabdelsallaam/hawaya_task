import React from 'react';
import { View, Text } from 'react-native';
import style from './BackgroundStyle';


export default function Background({ title, subtitle, children }) {
    return (
        <View style={style.contianer}>
            <View style={style.textStyleContainer}>
                <Text style={style.textStyle}>{title}</Text>
                {subtitle ? <Text style={style.subtitleStyle}>{subtitle}</Text> : null}
            </View>
            <View style={style.childrenStyleContainer}>
                {children}
            </View>
        </View>
    )
}