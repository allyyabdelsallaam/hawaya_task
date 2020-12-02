import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: height / 13,
        flexDirection: 'row',
    }
})


export default style;