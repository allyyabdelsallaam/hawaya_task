import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        height: height / 12,
        flexDirection: 'row',
    }
})


export default style;