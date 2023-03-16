import React from 'react'
import { View,TouchableOpacity,StyleSheet } from 'react-native'
import FlashLightIcon from 'react-native-vector-icons/MaterialIcons'
import { useGlobalContext } from '../../context'
import AboutIcon from 'react-native-vector-icons/FontAwesome'
import HistoryIcon from 'react-native-vector-icons/MaterialIcons'


// home screen navbar
const Navbar = ({ navigation })=> {


    // using global context to handle flaslight state variables 
    const {isFlashLightOn,toggleFlashLight} = useGlobalContext()
    
    return (
        <View style={styles.navbarContainer}>

            {/* gives opacity to icon on press  */}
            <TouchableOpacity
                style={styles.flashLightIcon}
                onPress={toggleFlashLight}
            >
                {/* react native flash light icon  */}
                <FlashLightIcon

                    // change icon based on if flash light is on
                    name={isFlashLightOn ? 'flash-off': 'flash-on'}
                    color='white'
                    size={28}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.flashLightIcon}
                onPress={()=> {
                    navigation.navigate('HistoryScreen')
                }}
            >
                {/* react native flash light icon  */}
                <HistoryIcon

                    // change icon based on if flash light is on
                    name='history'
                    color='white'
                    size={28}
                />
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.navbarIcon}
                onPress={()=> {
                    navigation.navigate('AboutScreen')
                }}
            >
                {/* react native flash light icon  */}
                <AboutIcon

                    // change icon based on if flash light is on
                    name='info'
                    color='white'
                    size={28}
                />
            </TouchableOpacity>
        </View>
    )
}



// styles
const styles = StyleSheet.create({
    navbarContainer : {
        flex:0.82,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:45,
        marginTop:25,
    },
    navbarIcon:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        paddingHorizontal:22,
        paddingVertical:12
    },
    flashLightIcon : {
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        paddingHorizontal:13,
        paddingVertical:12
    },
})

export default Navbar
