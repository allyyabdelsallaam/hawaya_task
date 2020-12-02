import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,

        // alignItems: 'center',
        // width: width,
        // height: height,
        // backgroundColor: 'yellow'
    },
    nameStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        //width: '100%',
        paddingHorizontal: 8
    },
    nameTextStyle: {
        fontSize: 25,
        textAlign: 'left',
        textAlignVertical: 'center',
        marginEnd: 8,
        fontFamily: "SkolarSansRegular"
    },
    infoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '87%',
        alignSelf: 'center'
    },
    infoTextStyle: {
        fontSize: 15,
        textAlign: 'left',
        textAlignVertical: 'center',
        marginStart: 8,
        fontFamily: "SkolarSansRegular"
    },
    bioContainerStyle: {
        backgroundColor: '#fff',
        width: '95%',
        height: height / 4,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 8,
        borderRadius: 8
    },
    bioStyle: {
        width: '95%',
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bioTextStyle: {
        textAlign: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontFamily: "SkolarSansRegular"
    },
    LikeBtnStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 20,
        end: 10,
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    aboutContainer: {
        backgroundColor: '#fff',
        width: '95%',
        height: height / 4,
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 8
    },
    tagsContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        //height: height / 11,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutTextStyleContainer: {
        width: '100%',
        height: height / 25,
        justifyContent: 'center'
    },
    renderItemContainer: {
        //width: '100%',
        // width: '100%',
        // backgroundColor: 'blue'
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
    profilePicStyleContainer: {
        width: width - 35,
        height: height / 2,
        borderRadius: 15,
        margin: 8,
        overflow: 'hidden'
        // width: '100%',
        // height: '25%',
        // backgroundColor: 'red',
        // borderRadius: 30,
        // alignItems: 'center',
        // width: '100%',
        // height: height / 3,
        // borderRadius: 8,
        // overflow: 'hidden',
        // alignSelf: 'center'
    }
})

export default style