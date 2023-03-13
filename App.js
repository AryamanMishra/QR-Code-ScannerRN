import HomeScreen from "./components/HomeScreen.js"
import { AppProvider } from "./context.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScanOutput from "./components/QrScanOutput.js";
import About from "./components/About.js";



// creating stack navigator to handle navigation between screens
const Stack = createNativeStackNavigator();



// main app component
const App = ()=> {
	
	return(

		// app provider gives global context to all components
		<AppProvider>

			{/* handles navigation */}
			<NavigationContainer>

				{/* stack navigator to contains multiple screens inside it  */}
				<Stack.Navigator

					// no screen name to be shown on top
					screenOptions={{
						headerShown: false,
					}}
				>

					{/* home screen  */}
					<Stack.Screen 
						name="HomeScreen" 
						component={HomeScreen} 
					/>

					{/* output screen  */}
					<Stack.Screen 
						name="OutputScreen" 
						component={QrScanOutput} 
						options={{
							animation:'slide_from_right'
						}}
					/>

					{/* about screen  */}
					<Stack.Screen
						name="AboutScreen"
						component={About}
						options={{
							animation:'slide_from_right'
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AppProvider>	
	) 
		
}


export default App