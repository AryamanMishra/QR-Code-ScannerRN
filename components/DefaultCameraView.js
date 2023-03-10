import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CameraIcon from 'react-native-vector-icons/MaterialCommunityIcons'


const DefaultCameraView = ({ requestPermission })=> {
    return (
        <View style={styles.defaultCameracontainer}>
            <TouchableOpacity
                style={styles.cameraIcon}
                onPress={requestPermission}
                activeOpacity={0.3}
            >
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
