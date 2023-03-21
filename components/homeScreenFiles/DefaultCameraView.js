import React from 'react'
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import CameraIcon from 'react-native-vector-icons/MaterialCommunityIcons'


// renders when app is opened for the first time or no camera permission is provided
const DefaultCameraView = ({ onPress })=> {

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
                    size={42}
                    color='white'
                >
                </CameraIcon>
            </TouchableOpacity>
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
        marginBottom:25
    }
});



export default DefaultCameraView