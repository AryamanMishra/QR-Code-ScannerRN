import React,{useState} from 'react'
import { View,TouchableOpacity,StyleSheet } from 'react-native'
import FlashLightIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CrossIcon from 'react-native-vector-icons/Entypo'
import { useGlobalContext } from '../context'

const Navbar = ({ exitApp })=> {

    const {isFlashLightOn,toggleFlashLight} = useGlobalContext()
    
    return (
        <View style={styles.navbarContainer}>
            <TouchableOpacity
                style={styles.navbarIcon}
                onPress={toggleFlashLight}
            >
                <FlashLightIcon
                    name={isFlashLightOn ? 'flashlight-off': 'flashlight'}
                    color='white'
                    size={30}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navbarIcon}
                onPress={exitApp}
            >
                <CrossIcon
                    name='cross'
                    color='white'
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer : {
        flex:1.1,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:50
    },
    navbarIcon: {
        borderWidth:1,
        borderRadius:50,
        borderColor:'white',
        paddingVertical:13,
        paddingHorizontal:13,
        marginTop:30
    }
})

export default Navbar
