import React, { useEffect } from 'react'
import { Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,BackHandler,Alert,ActivityIndicator } from 'react-native';
import DefaultCamera from '../components/homeScreenFiles/DefaultCameraView';
import Navbar from '../components/homeScreenFiles/Navbar';
import CameraView from '../components/homeScreenFiles/CameraView';
import { useGlobalContext } from '../context';
import Sidebar from '../components/homeScreenFiles/Sidebar';


// home screen
const HomeScreen = ({ navigation })=> {


	// state value to store camera permission status and the func to request that permission
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const {showSidebar} = useGlobalContext()


	// function to handle exit app action
	// triggered when hardware back button is pressed on home screen
	// or provided close button is pressed
	const exitApp = ()=> {

		// ask user to confirm quit
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


	// after effect to handle hardware back press and to exit the app if confirmed
	useEffect(()=> {
		const backHandler = BackHandler.addEventListener(
		   'hardwareBackPress',
			exitApp
		)
		return () => backHandler.remove();
	},[])
	


	// if permission value is null that means its not loaded yet
 	if (!permission) { 
		return (
			<>
				{/* renders a spinning loading icon  */}
				<ActivityIndicator size="large" style={styles.loadingContainer} color="#ffffff"/>
				<StatusBar style='dark'/>
			</>
		)
		
	}


	// if permission is not granted by the user or the app is opened for the first time
	if (!permission.granted) {	
		return (
			<View style={styles.appContainer}>

				{showSidebar && <Sidebar />}

				{/* navbar  */}
				<Navbar exitApp={exitApp}/>

				{/* renders camera icon which asks for camera permission on press  */}
				<DefaultCamera requestPermission={requestPermission}/>

				<StatusBar style='light'/>
			</View>	
		)
	}
	

	// camera permissiom provided
	return (
		<View style={styles.appContainer}>

			{showSidebar && <Sidebar />}

			{/* navbar  */}
			<Navbar exitApp={exitApp} navigation={navigation}/>

			{/* actual camera view handling scanning process  */}
			<CameraView navigation={navigation}/>

			<StatusBar style='light'/>
		</View>	
	);
}



// styles
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
