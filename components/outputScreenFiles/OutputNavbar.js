import React, {useEffect} from 'react'
import { Text, View,StyleSheet, Pressable,BackHandler } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import AboutIcon from 'react-native-vector-icons/FontAwesome'
import { useGlobalContext } from '../../context'



// navbar of output page
const OutputNavbar = ({ navigation })=> {


    // changes scanned value
    const {setScanned} = useGlobalContext()


    // handles back press
    const handleBackButton = ()=> {

        // if user press back set scan to false so that the camera activates again to scan qr codes
        // if scanned is true the scanner do not give any output
        setScanned(false)

        // delayes so that state variable can take place
        // could have used a useEffect too with a dependency of scanned but this does the job too
        setTimeout(()=> {
            navigation.navigate('HomeScreen') 
        },100)  
    }

    
    // handles hardware back press
    useEffect(()=> {
		const backHandler = BackHandler.addEventListener(
		   'hardwareBackPress',
			handleBackButton
		)
		return () => backHandler.remove();
	},[])


    
    return (
        <View style={styles.outputNavbarContainer}>
            <View style={styles.innerWrapper}>

                {/* back navigation icon  */}
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:30}}
                    onPress={handleBackButton}
                >
                    {/* react native left arrow icon  */}
                    <ArrowLeft 
                        name='arrow-left'
                        size={30}
                        color='white'
                        style={{marginTop:5}}     
                    />
                </Pressable> 
                <Text style={styles.outputNavbarText}>Output</Text>
            </View>

            {/* link to navigate to about page  */}
            <View style={styles.aboutPageLink}>
                <Pressable
                    android_ripple={{color:'grey',borderless:true,radius:30}}
                    onPress={()=> {
                            navigation.navigate('AboutScreen')
                    }}
                >
                    <AboutIcon 
                        name='info'
                        size={25}
                        color='white' 
                    />
                </Pressable>  
            </View>
        </View>
    )
}



// styles
const styles = StyleSheet.create({
    outputNavbarContainer : {
        flex:1,
        backgroundColor:'#121917',
        width:'100%',
        height:110,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        flexDirection:'row'
    },
    innerWrapper : {
        alignItems:'center',
        marginTop:38,
        marginLeft:30,
        flexDirection:'row',
        gap:30, 
    },
    outputNavbarText : {
        color:'white',
        fontSize:21,
        letterSpacing:0.8
    },
    aboutPageLink : {
        marginTop:40,
        marginRight:40,
    }
})

export default OutputNavbar
