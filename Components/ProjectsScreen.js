import React from 'react'
import { SafeAreaView,View, Text,StyleSheet, ScrollView,Modal,Button,onPress } from 'react-native'
import ListItemSec from './ListItemSec'
import {MaterialIcons} from '@expo/vector-icons'
import {useState} from 'react'
import MainScreen from './MainScreen.js'
import PortfolioWebsite from './PortfolioWebsite'
export default function ProjectsScreen({value}) {
    const [vis, setvis] = useState(value)
    if(vis==false){
        return(
        <MainScreen/>)
    }
    else{
        return (<Modal visible={vis} animationType='none'>
            <SafeAreaView>
                
                <ScrollView>
                <Button title="close" color='#459cff' onPress={()=> setvis(false)}/>
                <ListItemSec title="Portfolio Website" image={require("../assets/project1.jpeg")} subtitle="May 2021"/>
                <ListItemSec title="E-Doctor" image={require("../assets/project2.jpeg")} subtitle="June 2021"/>
                <ListItemSec title="DRS system" image={require("../assets/DRSimg4.png")} subtitle="April 2021"/>
                <ListItemSec title="Live Plot of Covid-19" image={require("../assets/Mapimg.png")} subtitle="April 2021"/>
                </ScrollView>
                
            </SafeAreaView>
        </Modal>
        )
        }
}
