import { StyleSheet, Dimensions } from 'react-native';


const style = StyleSheet.create({
    contianer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
    },
    textStyleContainer: {
        // flex: 1,
        width: '85%',
        height: '15%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'left',
        textAlignVertical: 'center',
        width: '100%',
        height: '100%',
        fontSize: 25,
        fontFamily: 'SkolarSansRegular'
    },
    subtitleStyle: {
        textAlign: 'left',
        textAlignVertical: 'center',
        width: '100%',
        fontSize: 20,
        fontFamily: 'SkolarSansRegular',
        color: "#A9A9A9"
    },
    childrenStyleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '70%',
        // flex: 1
    }
})

export default style;