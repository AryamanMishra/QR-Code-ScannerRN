import React, { useEffect } from 'react'
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,BackHandler,Alert,ActivityIndicator } from 'react-native';
import DefaultCamera from './DefaultCameraView';
import Navbar from './Navbar';
import CameraView from './CameraView';


const HomeScreen = ({ navigation })=> {

	const [permission, requestPermission] = Camera.useCameraPermissions();

	const exitApp = ()=> {
		Alert.alert(
			'Close QR Scanner',
			'Are you sure you want to quit the application ?',
			[
				{
					text: 'Cancel',
					onPress: () => null,
					style: 'cancel',
				},
				{
					text:'Yes',
					onPress:()=> BackHandler.exitApp()
				}
			]
		)
		return true
	}
	useEffect(()=> {
		const backHandler = BackHandler.addEventListener(
		   'hardwareBackPress',
			exitApp
		)
		return () => backHandler.remove();
	},[])
	

	if (!permission) {
		return <ActivityIndicator size="large" style={styles.loadingContainer} color="#ffffff"/>;
	}

	if (!permission.granted) {	
		return (
			<View style={styles.appContainer}>
				<Navbar exitApp={exitApp}/>
				<DefaultCamera requestPermission={requestPermission}/>
				<StatusBar style='light'/>
			</View>	
		)
	}
	
	return (
		<View style={styles.appContainer}>
			<Navbar exitApp={exitApp} navigation={navigation}/>
			<CameraView navigation={navigation}/>
			<StatusBar style='light'/>
		</View>	
	);
}


const styles = StyleSheet.create({
	loadingContainer : {
		flex:1,
		justifyContent:'center',
		backgroundColor:'black'
	},
	appContainer : {
		flex:1,
		backgroundColor:'#121917'
	}
})
export default HomeScreen
