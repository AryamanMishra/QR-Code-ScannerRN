import React from 'react'
import { View,TouchableOpacity,StyleSheet,Pressable } from 'react-native'
import FlashLightIcon from 'react-native-vector-icons/MaterialIcons'
import { useGlobalContext } from '../../context'
import MenuIcon from 'react-native-vector-icons/MaterialIcons'


// home screen navbar
const Navbar = ({ })=> {


    // using global context to handle flaslight state variables 
    const {isFlashLightOn,toggleFlashLight,openSidebar} = useGlobalContext()
    
    return (
        <View style={styles.navbarContainer}>

            <Pressable
                android_ripple={{color:'grey',borderless:true,radius:30}}
                style={styles.navbarIcon}
                onPress={openSidebar}
            >
                <MenuIcon 
                    name='menu'
                    color='white'
                    size={30}   
                />
            </Pressable>
            {/* gives opacity to icon on press  */}
            <TouchableOpacity
                style={styles.navbarIcon}
                onPress={toggleFlashLight}
            >

                {/* react native flash light icon  */}
                <FlashLightIcon

                    // change icon based on if flash light is on
                    name={isFlashLightOn ? 'flash-off': 'flash-on'}
                    color='white'
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}



// styles
const styles = StyleSheet.create({
    navbarContainer : {
        flex:0.9,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:45,
        marginTop:20,
    },
    navbarIcon:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        paddingHorizontal:12,
        paddingVertical:12
    },
    aboutPageLink : {
        marginTop:30
    }
})

export default Navbar
