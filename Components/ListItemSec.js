import Constants from 'expo-constants'

import React from 'react'
import { View, Text, Image,StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {useState} from 'react'
// import MainScreen from './MainScreen.js'
import PortfolioWebsite from './PortfolioWebsite'
import DoctorWebsite from './DoctorWebsite'
import DRSProject from './DRSProject'
import MapProject from './MapProject'
export default function ListItemSec({title,subtitle,image}) {
    const [vis1, setvis1] = useState(false)
    const [vis2, setvis2] = useState(false)
    const [vis3, setvis3] = useState(false)
    const [vis4, setvis4] = useState(false)
    const handlestate=()=>{
        if (title=="Portfolio Website") {
            setvis1(true)
        }
        else if (title=="E-Doctor") {
            setvis2(true)
        }
        else if (title=="DRS system") {
            setvis3(true)
        }
        else if (title=="Live Plot of Covid-19") {
            setvis4(true)
        }
    }
    if(vis1==true){
        return (
                    <PortfolioWebsite value={vis1}/>
        )
        }
    if(vis2==true){
        return (
                    <DoctorWebsite value={vis2}/>
        )
    }
    if(vis3==true){
        return (
                    <DRSProject value={vis3}/>
        )
        }
    if(vis4==true){
        return (
                    <MapProject value={vis4}/>
        )
        }
        else{
    return (
        <SafeAreaView >
    <ScrollView>

    <Image source={image} style={styles.img}/>
    <TouchableOpacity onPress={handlestate}>
            <View style={styles.listpack}>
                <View style={styles.pack}>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text2}>{subtitle}</Text>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={30} style={styles.arrow}/>
            </View>
            </TouchableOpacity>
    </ScrollView>
            </SafeAreaView>

    )
}
}
const styles = StyleSheet.create({
    listpack:{
    display:'flex',
    flexDirection:'row',
    paddingTop:Constants.statusBarHeight,
    paddingLeft:10,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:"#e3dfde",
    margin:10,
    borderRadius:20,
    justifyContent:'space-between',

    
    },
    text1:{
        fontSize:15,
        fontWeight:'bold',
        lineHeight:25,
        color:"#0a75ad"
        
    },
    text2:{
        fontSize:15,
        fontWeight:'bold',
        color:"#000"
    },
    pack:{
        marginLeft:20,
    },
img:{
width:400,
height:250,
margin:10,
borderRadius:20
},

})
