import {StyleSheet} from 'react-native';

const applicationContainer = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeCardContainer: {
        width: '100%',
        height: 125,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowRadius: 50,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardImageContainer: {
        flex: 0.30,
        height: '60%',
        resizeMode: 'contain'
    },
    cardContentContainer: {
        flex: 0.70
    },
    documentsCardContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowRadius: 50,
        marginVertical: 5,
    },
    documentsContainer: {
        width: '100%',
        height: 125,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderDetailContainer: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    orderDetailContainerStyle: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    profileContainer: {
        flex: 0.5,
        width: '100%',
        alignItems: 'flex-start',
    },
    creditContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const imageComponent = StyleSheet.create({
    logoStyle: {
        height: '20%',
        margin: 10,
        resizeMode: 'contain'
    }
})

const textComponent = StyleSheet.create({
    applicationHeadingStyle:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headingStyle: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        color: '#000000',
        fontSize: 16
    },
    blackTextStyle: {
        color: '#000000'
    },
    whiteTextStyle: {
        color: '#ffffff'
    },
})

const textInputComponent = StyleSheet.create({
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderColor: '#10218B',
        borderWidth: 1,
        borderRadius: 10
    },
    quantityInputStyle: {
        flex: 0.70,
        marginHorizontal: 10
    },
    quantityTextInputStyle: {
        width: '100%',
        height: 40,
        textAlign: 'center',
        paddingHorizontal: 15,
        borderColor: '#10218B',
        borderWidth: 1,
        borderRadius: 10,
    },
})

const buttonComponent = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        backgroundColor: '#10218B',
        borderRadius: 10,
        marginVertical: 5,
        padding : 10,
        alignItems: 'center'
    },
    buttonTextStyle: {
        color: '#ffffff'
    },
    counterButtonStyle: {
        flex: 0.15,
        width: 40,
        backgroundColor: '#10218B',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    pendingButtonStyle: {
        width: '100%',
        backgroundColor: '#FE0000',
        borderRadius: 10,
        marginTop: 10,
        padding : 10,
        alignItems: 'center',
    },
    processingButtonStyle: {
        width: '100%',
        backgroundColor: '#FFC300',
        borderRadius: 10,
        marginTop: 10,
        padding : 10,
        alignItems: 'center',
    },
    completeButtonStyle: {
        width: '100%',
        backgroundColor: '#00B900',
        borderRadius: 10,
        marginTop: 10,
        padding : 10,
        alignItems: 'center',
    },
    profileButtonStyle: {
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderColor: '#000000',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginVertical: 5
    },
})

const modalComponent = StyleSheet.create({
    modalStyle: {
        backgroundColor: '#ffffff',
        borderColor: '#10218B',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'stretch',
        padding: 10
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalCardStyle: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    modalOptionStyle: {
        alignItems: 'flex-start'
    },
    modalTextStyle: {
        color: '#000000',
        margin: 20,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export {applicationContainer, imageComponent, textComponent, textInputComponent, buttonComponent, modalComponent}