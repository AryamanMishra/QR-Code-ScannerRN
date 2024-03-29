import React from 'react'
import { StyleSheet, TouchableOpacity, View,Text,Linking } from 'react-native';
import CameraIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsIcon from 'react-native-vector-icons/Feather'


// renders when app is opened for the first time or no camera permission is provided
const DefaultCameraView = ({ onPress })=> {

    // opens app settings   
    const openSettigs = ()=> {
        Linking.openSettings()
    }

    return (
        <View style={styles.defaultCameracontainer}>

            <Text style={styles.text}>Please provide camera permission to proceed</Text>
            {/* gives opacity to the icon on press  */}
            <TouchableOpacity
                style={styles.cameraIcon}

                // request cam permission on press 
                onPress={onPress}

                // amount of opacity offered on press. default value is 0.2
                activeOpacity={0.3}
            >
                {/* react native camera icon  */}
                <CameraIcon
                    name='camera'
                    size={40}
                    color='white'
                >
                </CameraIcon>
            </TouchableOpacity>


            {/* gives user liberty to provide camera permission from settings any time */}
            {/* android by default do no asks for permission if it is denied once */}
            {/* so if permission is denied by mistake this space can be used to provide it */}
            <View style={styles.downView}>
                <Text style={styles.textD}>You can always provide permission directly from app settings </Text>
                <TouchableOpacity
                    style={styles.settingsIcon}
                    onPress={openSettigs}
                >

                {/* react native settings icon  */}
                    <SettingsIcon 
                        name='settings'
                        size={27}
                        color='white'
                    />
                </TouchableOpacity>
                
            </View>
        </View>
    );
}



// styles
const styles = StyleSheet.create({
	defaultCameracontainer : {
		alignItems:'center',
		justifyContent:'center',
		flex:1,
	},
    cameraIcon : {
        borderWidth:1,
        borderRadius:50,
        borderColor:'white',
        paddingVertical:15,
        paddingHorizontal:15
    },
    text : {
        color:'grey',
        marginBottom:25,
        fontSize:13,
        textAlign:'center'
    },
    downView : {
        position:'absolute',
        top:'83%',
        width:'50%',
        alignItems:'center',
        gap:15
    } ,
    textD : { 
        color:'grey',
        fontSize:13,
        textAlign:'center'
    },
});



export default DefaultCameraView