import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    touch: {
        flex: 1,
    },
    app: {
        flex: 1,
        backgroundColor: '#aba905',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    header: {
        textAlign: 'center',
        fontFamily: 'nexa-bold',
        fontSize: 50,
        color: 'white',
        marginBottom: 20,
        letterSpacing: 2,
    },
    input: {
        textAlign: 'center',
        fontFamily: 'nexa-light',
        fontSize: 20,
        color: 'white',
        backgroundColor: '#bfbfbf',
        width: 225,
        paddingVertical: 4,
        borderRadius: 8,
    },
    tap: {
        flexDirection: 'row',
    },
    tapper: {
        fontFamily: 'nexa-light',
        color: 'white',
    },
    tappable: {
        fontFamily: 'nexa-light',
        color: 'black',
    },
    button: {
        backgroundColor: 'black',
        width: 225,
        marginBottom: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'nexa-bold',
        fontSize: 20,
        color: 'white',
    },
    error: {
        textAlign: 'center',
        fontSize: 15,
        color: 'grey',
    },
    head: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    logo: {
        height: 57,
        width: 33,
    },
    message: {
        position: 'absolute',
        right: 0,
        bottom: 8
    }
})

export default globalStyles