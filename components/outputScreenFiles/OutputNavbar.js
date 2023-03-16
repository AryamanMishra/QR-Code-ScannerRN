import React, {useEffect} from 'react'
import { Text, View,StyleSheet, Pressable,BackHandler } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import AboutIcon from 'react-native-vector-icons/Fontisto'
import { useGlobalContext } from '../../context'



// navbar of output page
const OutputNavbar = ({ navigation })=> {

    const {setScanned} = useGlobalContext()

    const handleBackButton = ()=> {
        setScanned(false)
        setTimeout(()=> {
            navigation.navigate('HomeScreen') 
        },100)  
    }

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
                        size={22}
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
        flex:1.05,
        backgroundColor:'#121917',
        width:'100%',
        justifyContent:'space-between',
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
        marginTop:67,
        marginRight:42,
    }
})

export default OutputNavbar
