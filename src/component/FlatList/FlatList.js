import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Chip } from 'react-native-paper';
import LikeBtn from '../../../assets/like';
import Badge from '../../../assets/badge';
import AddressIcon from '../../../assets/AddressIcon';
import AgeIcon from '../../../assets/AgeIcon';
import JobIcon from '../../../assets/JobIcon';
import LocationIcon from '../../../assets/LocationIcon';
import style from './FlatListStyle';


export default function ProfilesList({ data }) {

    const RenderItem = ({ props: { name, age, job, placeOfLiving, placeOfBirth, Bio, About }
}) => (
    <View>
        <View style={style.profilePicStyleContainer}>
            <Image style={{ width: '100%', height: '100%' }} resizeMode="cover" source={require('../../../assets/Rectangle.png')} />
            <TouchableOpacity style={style.LikeBtnStyle}>
                <LikeBtn />
            </TouchableOpacity>
        </View>
        <View style={style.nameStyle}>
            <Text style={style.nameTextStyle}>{name}</Text>
            <Badge />
        </View>
        <View style={style.infoStyle}>
            <AgeIcon />
            <Text style={style.infoTextStyle}>{age} years old</Text>
        </View>
        {job && <View style={style.infoStyle}>
            <JobIcon />
            <Text style={style.infoTextStyle}>{job}</Text>
        </View>}
        {placeOfLiving && <View style={style.infoStyle}>
            <LocationIcon />
            <Text style={style.infoTextStyle}>{placeOfLiving}</Text>
        </View>}
        {placeOfBirth && <View style={style.infoStyle}>
            <AddressIcon />
            <Text style={style.infoTextStyle}>{placeOfBirth}</Text>
        </View>}
        {Bio && <View style={style.bioContainerStyle}>
            <View style={style.bioStyle}>
                <Text style={style.bioTextStyle} numberOfLines={4} >{Bio}</Text>
            </View>
            <TouchableOpacity style={style.LikeBtnStyle}>
                <LikeBtn />
            </TouchableOpacity>
        </View>}
        {About.length ? <View style={style.aboutContainer}>
            <View style={style.aboutTextStyleContainer}>
                <Text style={{ textAlign: 'center', textAlignVertical: 'center', fontSize: 16, fontFamily: "SkolarSansRegular" }}>About Me</Text>
            </View>
            <View style={style.tagsContainerStyle}>
                {
                    About.map(item => (
                        <Chip icon="information" style={{ margin: 3, paddingHorizontal: 5 }} mode="flat">{item}</Chip>
                    ))
                }
            </View>
            <View style={{ alignSelf: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity style={[style.LikeBtnStyle, { end: 10, bottom: 0 }]}>
                    <LikeBtn />
                </TouchableOpacity>
            </View>

        </View> : null}
    </View>
)

return (
    <View style={style.container}>
        <FlatList
            contentContainerStyle={{ width: '95%', padding: 8, alignItems: 'center', alignSelf: 'center' }}
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => (
                <RenderItem props={item} />
            )}
        />
    </View>
)
}





{/* <View style={style.renderItemContainer}>
            <View style={style.profilePicStyleContainer}>
                <Image style={{width: '100%', height: '100%'}} resizeMode="contain" resizeMethod="resize" source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"}} />
                <TouchableOpacity style={{position: 'absolute', backgroundColor: '#fff', end: 10, bottom: 10}}>
                    <LikeBtn />
                </TouchableOpacity>
            </View>
            <View style={style.nameStyle}>
                <Text style={style.nameTextStyle}>{props.name}</Text>
                <Icon name="checkmark-outline" size={30} />
            </View>
            <View style={style.infoStyle}>
                <Icon name="checkmark-outline" size={20} />
                <Text style={style.infoTextStyle}>{props.age}</Text>
            </View>
            <View style={style.infoStyle}>
                <Icon name="checkmark-outline" size={20} />
                <Text style={style.infoTextStyle}>{props.job}</Text>
            </View>
            <View style={style.infoStyle}>
                <Icon name="checkmark-outline" size={20} />
                <Text style={style.infoTextStyle}>{props.placeOfLiving}</Text>
            </View>
            <View style={style.infoStyle}>
                <Icon name="checkmark-outline" size={20} />
                <Text style={style.infoTextStyle}>{props.placeOfBirth}</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%' }}>
                <Text style={{ textAlign: 'center', alignItems: 'center', textAlignVertical: 'center', width: '75%' }} >{props.Bio}</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: '100%' }}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text>About Me</Text>
                    {
                        props.About.map(item => (
                            <Chip mode="flat" >{item}</Chip>
                        ))
                    }
                </View>
            </View>
        </View> */}