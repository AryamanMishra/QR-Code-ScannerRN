import React from 'react'
import { View,TouchableOpacity,StyleSheet,Pressable } from 'react-native'
import FlashLightIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CrossIcon from 'react-native-vector-icons/Entypo'
import { useGlobalContext } from '../context'
import AboutIcon from 'react-native-vector-icons/Fontisto'


// home screen navbar
const Navbar = ({ exitApp,navigation })=> {


    // using global context to handle flaslight state variables 
    const {isFlashLightOn,toggleFlashLight} = useGlobalContext()
    
    return (
        <View style={styles.navbarContainer}>

            {/* gives opacity to icon on press  */}
            <TouchableOpacity
                style={styles.navbarIcon}
                onPress={toggleFlashLight}
            >

                {/* react native flash light icon  */}
                <FlashLightIcon

                    // change icon based on if flash light is on
                    name={isFlashLightOn ? 'flashlight-off': 'flashlight'}
                    color='white'
                    size={30}
                />
            </TouchableOpacity>


            {/* icon to navigate to about page on press  */}
            <View style={styles.aboutPageLink}>

                {/* pressable is used to implement a custom button type icon  */}
                {/* upside over TouchableOpacity is that it provides android_ripple effect  */}
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:35}}
                    onPress={()=> {
                            navigation.navigate('AboutScreen')
                    }}
                >

                {/* react native info icon  */}
                    <AboutIcon 
                        name='info'
                        size={26}
                        color='white'
                    />
                </Pressable>  
            </View>

            {/* gives opacity to icon on press  */}
            <TouchableOpacity
                style={styles.navbarIcon}
                onPress={exitApp} // exit app on pressing the cross icon
            >
                {/* react native cross icon  */}
                <CrossIcon
                    name='cross'
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
    },
    aboutPageLink : {
        marginTop:30
    }
})

export default Navbar
