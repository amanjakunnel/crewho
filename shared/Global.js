import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    touch: {
        flex: 1,
    },
    app: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        
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
        backgroundColor: '#f7931e',
        height: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    logo: {
        height: 57,
        width: 33,
    },
    message: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    background: {
        height: '100%',
        width: '100%',
    },
    home: {
        flex: 1,
        
        backgroundColor: 'white',
    },
    card: {
        flex: 7,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        flexDirection: 'row',
        paddingVertical: 25,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    content: {
        flexDirection: 'row',

    },
    profile: {
        height: 125,
        width: 125,
        borderRadius: 6,
        marginHorizontal: 25,
        borderColor: '#ffa500',
        borderWidth: 3.5,
    },
    info: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 30,
        marginBottom: -5,
    },
    skills: {
        fontSize: 20,
    },
    status: {
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: "lightgrey",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    location: {
    },
    headspace: {
        margin: 15,
    },
    account: {
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    accountpic: {
        height: 200,
        width: 200,
        borderRadius: 100,
        position: 'absolute',
        top: -10,
        borderColor: 'white',
        borderWidth: 10,
        right: '27%',
    },
    information: {
        top: -125,
    },
    iname: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
    },
    iskills: {
        textAlign: 'center',
        fontSize: 25,
    },
    resume: {
        backgroundColor: 'lightgrey',
        fontSize: 22.5,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 5,
        fontWeight: "bold",
        position: 'absolute',
        right: 90,
        bottom: 80,
    },
    edit: {
        backgroundColor: 'lightgrey',
        fontSize: 22.5,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 5,
        fontWeight: "bold",
        position: 'absolute',
        left: 60,
        bottom: 80,
    },
    nav: {
        flexDirection:'row',
        backgroundColor: '#f7931e',
        top: -80,
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    accounticon: {
        flex: 1,
        alignSelf: 'center',
        paddingHorizontal: 33,
    },
    uprofile: {
        height: 75,
        width: 75,
        borderRadius: 6,
        marginHorizontal: 25,
        borderColor: '#ffa500',
        borderWidth: 3.5,
    },
    uinfo: {
        justifyContent: 'center',
    },
    uname: {
        fontSize: 30,
        marginBottom: -5,
    },
    uskills: {
        fontSize: 20,
    },
    ustatus: {
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: "lightgrey",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    ulocation: {
    },
    users: {
        height: 0,
        width: 0,
    }
})

export default globalStyles