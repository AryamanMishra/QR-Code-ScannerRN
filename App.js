import HomeScreen from "./components/HomeScreen.js"
import { AppProvider } from "./context.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScanOutput from "./components/QrScanOutput.js";


const Stack = createNativeStackNavigator();
const App = ()=> {

	
	return(
		<AppProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen 
						name="HomeScreen" 
						component={HomeScreen} 
					/>
					<Stack.Screen 
						name="OutputScreen" 
						component={QrScanOutput} 
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