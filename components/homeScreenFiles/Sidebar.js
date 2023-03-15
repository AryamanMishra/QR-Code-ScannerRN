import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AboutIcon from 'react-native-vector-icons/Fontisto'
import CrossIcon from 'react-native-vector-icons/Entypo'
import { useGlobalContext } from '../../context'


const Sidebar = ()=> {

    const {closeSidebar} = useGlobalContext()
    return (
        <View style={styles.sidebar}>
            <View style={styles.sidebarNav}>
                <Text style={styles.text}>QR Scanner</Text>
                <TouchableOpacity
                    style={styles.sidebarIcon}
                    onPress={closeSidebar}
                >
                    {/* react native cross icon  */}
                    <CrossIcon
                        name='cross'
                        color='white'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.sidebarContent}>
                <Text style={styles.text}>Hi</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sidebar : {
        position:'absolute',
        left:0,
        backgroundColor:'rgba(0,0,0,0.5)',
        height:'100%',
        width:'57%',
        
    },
    sidebarNav : {
        flex:1,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    sidebarIcon : {
        margin:60
    },
    text : {
        color:'white',
        fontSize:20
    },
    sidebarContent : {
        flex:5
    }
})
export default Sidebar
