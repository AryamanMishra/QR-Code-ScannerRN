import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CameraIcon from 'react-native-vector-icons/MaterialCommunityIcons'


// renders when app is opened for the first time or no camera permission is provided
const DefaultCameraView = ({ requestPermission })=> {

    return (
        <View style={styles.defaultCameracontainer}>

            {/* gives opacity to the icon on press  */}
            <TouchableOpacity
                style={styles.cameraIcon}

                // request cam permission on press 
                onPress={requestPermission}

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
        borderTopWidth:1,
        borderTopColor:'white',
	},
    cameraIcon : {
        borderWidth:1,
        borderRadius:50,
        borderColor:'white',
        paddingVertical:15,
        paddingHorizontal:15
    }
});



export default DefaultCameraView
