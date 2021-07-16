import React from 'react'
import { View, Text,StyleSheet,Image, ImageBackground, StatusBar,onPress, Button,SafeAreaView, Modal } from 'react-native'
import About from './About'
import {useState} from 'react'
import ProjectsScreen from './ProjectsScreen'
import ContactScreen from './ContactScreen'
import Constants from 'expo-constants'
export default function MainScreen() {
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)
    const [state3, setstate3] = useState(false)
    if(state1==true){
        return(
            <About value={true}/>
        )
    }
    if(state2==true){
        return(
            <ProjectsScreen value={true}/>
        )
    }
    if(state3==true){
        return(
            <ContactScreen value={true}/>
        )
    }
    else{
    return (
        <Modal animationType="slide" >

        <View style={styles.bg}>
            <View style={styles.menu}>
            <Text style={styles.menuitem} onPress={()=>setstate1(true)
            }>About</Text>
            <Text style={styles.menuitem} onPress={()=>setstate2(true)
            }>Project</Text>
            <Text style={styles.menuitem} onPress={()=>setstate3(true)
            }>Contact</Text>
            </View>
            <View style={styles.bgimg}>

            <Image source={require("../assets/portimg.jpg")} style={styles.mainimg}/>
            </View>
            </View>
        
</Modal>
    )
        }
}
const styles = StyleSheet.create({
    mainimg:{
        width:450,
        height:900
    },
    bgimg:{
        zIndex:-1
    },
    menu:{
        display:"flex",
        flexDirection:'row',
        justifyContent:"center",
        
    },
    menuitem:{
        color:"#00FFFF",
        top:Constants.statusBarHeight,
        padding:9,
        margin:10,
    },
    bg:{
        backgroundColor:'#000'
    },


})