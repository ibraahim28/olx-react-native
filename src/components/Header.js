import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const logo = require('../assets/images/logo.jpg')
import Icon from 'react-native-vector-icons/FontAwesome';
const carIcon = <Icon name="car" size={28} />;
const propertyIcon = <Icon name="building" size={28} />;
const Header = () => {
    return (
        <View style={styles.header} >
            <View style={{ flex: 1 }}>
                <Image source={logo} alt='logo' style={styles.logo} />
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <View style={{ backgroundColor: '#ccc', padding: 8, borderRadius: 999 }}>
                        {carIcon}
                        </View>
                    <Text style={{ fontSize: 16, fontWeight: '700', }}>
                        Cars
                        </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <View style={{ backgroundColor: '#ccc', padding: 8, borderRadius: 999 }}>
                        {propertyIcon}
                        </View>
                    <Text style={{ fontSize: 16, fontWeight: '700', }}>
                        Property
                        </Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    logo: {
        margin: 10,
        width: 60,
        height: 60,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        height: '10%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        paddingTop: 30
    },

})