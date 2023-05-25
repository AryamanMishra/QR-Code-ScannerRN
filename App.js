import HomeScreen from "./screens/HomeScreen.js"
import { AppProvider } from "./context.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScanOutput from "./screens/QrScanOutput.js";
import About from "./screens/About.js";
import HistoryScreen from "./screens/HistoryScreen.js";
import HistoryItemDetail from "./screens/HistoryItemDetail.js";


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
						options={{
							animation:'fade'
						}}
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

					{/* history screen  */}
					<Stack.Screen
						name="HistoryScreen"
						component={HistoryScreen}
						options={{
							animation:'slide_from_bottom'
						}}
					/>

					<Stack.Screen
						name="HistoryItemDetail"
						component={HistoryItemDetail}
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