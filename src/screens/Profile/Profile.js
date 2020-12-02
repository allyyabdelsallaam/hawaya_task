import React, { useState } from 'react';
import { View } from 'react-native';
import ProfilesList from '../../component/FlatList/FlatList';
import ProfileData from './ProfileData';


export default function Profile({ }) {
    return (
        <View style={{flex: 1}}>
            <ProfilesList data={ProfileData} />
        </View>
    )
}