import React from 'react'
import { View, Text,Image,ScrollView, SafeAreaView,StyleSheet, Button, Platfor,Modal,Platform } from 'react-native'
import {useState} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProjectsScreen from './ProjectsScreen.js'
export default function MapProject({value}) {
    const [state, setstate] = useState(1)
    const [vis, setvis] = useState(value)
    var img1=require(`../assets/Mapimg.png`)
    if(vis==false){
        return(
        <ProjectsScreen/>)
    }
    else{
    return (
        <Modal visible={vis} animationType='slide'>
<SafeAreaView>
    <ScrollView>
    <Button title="close" color='#459cff' onPress={()=> setvis(false)}/>
    <Image source={img1} style={styles.img}/>
    <View style={styles.arrowpack}>
    </View>
    <View style={styles.headtext}>
        <Text style={styles.texthead}>About Project</Text>
    </View>
    <View style={styles.bodytext}>
    <Text style={styles.textbody}>I made a live data plotting tool on world map concerned about the increase in covid 19 data.The Tech Stacks used in the project were JavaScript and Mapbox.
</Text>
<Text style={styles.sectext}>
Tech Stacks
</Text>


<View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        JavaScript
    </Text>
    <Text style={styles.greenbox}>
        Mapbox
    </Text>


</View>
<Text style={styles.sectext}>
    Can be found here :
</Text>
<View style={styles.linkgrid}>
    <MaterialCommunityIcons name='github' size={30} style={styles.icon}/>
    <Text style={styles.bluebox}>

    
        https://github.com/PranavChauhan22

    </Text>


</View>
    </View>

      </ScrollView>
</SafeAreaView>
</Modal>
    )
    }
}

const styles = StyleSheet.create({
    headtext:{fontSize:20,fontWeight:'bold',lineHeight:20},
    img:{
        width:400,
        height:400,
        margin:10,
        borderRadius:20,
        
        },
        arrowpack:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
        },
        texthead:{
            textAlign:'center',
            fontSize:30,
            fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
    

        },
        sectext:{
            textAlign:'center',
            fontSize:20,
            fontStyle:'italic',
            fontWeight:'bold',
            fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
            

        },
        textbody:{
            textAlign:'center',
            fontSize:20,
            fontFamily:Platform.OS=='ios'?'Avenir':'Roboto',
            padding:10

        },
        greenbox:{
            backgroundColor:'#42f5c5',
            color:'#03805e',
            padding:10,
            margin:10,
            
        },
        bluebox:{
            backgroundColor:'#13acf2',
            color:'#FFFFFF',
            padding:15,
            margin:15,

            
            
        },
        techgrid:{
            display:'flex',
            flexDirection:'row',
            margin:10,
            padding:10,
            flexWrap:'wrap'
        },
        linkgrid:{
            display:'flex',
            flexDirection:'row',
            margin:10,
            padding:10,
            flexWrap:'wrap',
        },
        icon:{
            padding:10,
            margin:10
        }
    

})