import React from 'react'
import { StyleSheet, Text, View,Pressable,Linking, TouchableOpacity } from 'react-native'
import ArrowLeft from 'react-native-vector-icons/Octicons'
import GithubIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import pkgInfo from '../package.json'


const About = ({ navigation })=> {

    const githubLink = 'https://github.com/AryamanMishra/QR-Code-ScannerRN'
    const checkURL = ()=> {
        if (Linking.canOpenURL) {
            Linking.openURL(githubLink)
        }
    }

    return (
        <View style={styles.aboutPage}>
            <View style={styles.aboutPageNav}>
                <View style={styles.innerNav}>
                    <Pressable
                            android_ripple={{color:'grey',borderless:true,radius:30}}
                            onPress={()=> {
                                    navigation.goBack()
                            }}
                        >
                            <ArrowLeft 
                                name='arrow-left'
                                size={30}
                                color='white'
                                style={{marginTop:5}}
                            />
                    </Pressable>
                    <Text style={styles.aboutNavbarText}>About</Text>
                </View>
                <View style={styles.githubLink}>
                    <TouchableOpacity
                        onPress={checkURL}
                    >
                        <GithubIcon 
                            name='github'
                            size={30}
                            color='white'   
                        />
                    </TouchableOpacity>
                   
                </View>
            </View>
            <View style={styles.aboutPageContent}>
                <Text style={styles.text}>
                    A basic QR/Bar code scanner application made using react-native and react hooks
                </Text>
            </View>
            <View style={styles.versionInfo}>
                <Text style={styles.versionAppNameText}>@QR Scanner</Text>
                <Text style={styles.versionAppNameText}>Version : {pkgInfo.version}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutPage : {
        flex:1
    },
    aboutPageNav : {
        flex:1.05,
        backgroundColor:'#121917',
        width:'100%',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        flexDirection:'row'
    },
    innerNav : {
        alignItems:'center',
        marginTop:38,
        marginLeft:30,
        flexDirection:'row',
        gap:30,
    },
    aboutPageContent : {
        flex:6.5,
        backgroundColor:'black'
    },
    aboutNavbarText: {
        color:'white',
        fontSize:21,
        letterSpacing:0.8
    },
    text: {
        color:'white',
        fontSize:19,
        marginVertical:32,
        marginHorizontal:25,
        lineHeight:28
    },
    githubLink : {
        marginTop:67,
        marginRight:42,
        
    },
    
    versionInfo : {
        position:'absolute',
        top:'91%',
        left:'23%',
        flexDirection:'row',
        gap:15
    },
    versionAppNameText : {
        fontSize:15,
        color:'grey',
    },
})

export default About
