import React from 'react'
import { View, Text,Image,ScrollView, SafeAreaView,StyleSheet, Button, Platform,Modal } from 'react-native'
import {useState} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProjectsScreen from './ProjectsScreen.js'

export default function DRSProject({value}) {
    const [state, setstate] = useState(1)
    const [vis, setvis] = useState(value)
    var img
    var img1=require(`../assets/DRSimg1.png`)
    var img2=require(`../assets/DRSimg2.png`)
    var img3=require(`../assets/DRSimg3.png`)
    var img4=require(`../assets/DRSimg4.png`)
    if (state==0) {
        img=img1
    }
    else if (state==1) {
        img=img2
    }
    else if (state==2) {
        img=img3
    }
    else if (state==3) {
        img=img4
    }
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
    <Image source={img} style={styles.img}/>
    <View style={styles.arrowpack}>
    
    <MaterialCommunityIcons name='arrow-left-drop-circle' size={40} color='#000FFF' onPress={()=>setstate((state!=0)?((state-1)%4):3)}/>
    <MaterialCommunityIcons name='arrow-right-drop-circle' size={40} color='#000FFF' onPress={()=>setstate((state+1)%4)}/>
    </View>
    <View style={styles.headtext}>
        <Text style={styles.texthead}>About Project</Text>
    </View>
    <View style={styles.bodytext}>
    <Text style={styles.textbody}>This is the traditional decision review system used in sports developed using the Tkinter(Graphical user interface of Python).
</Text>
<Text style={styles.sectext}>

The sections of the website are:
</Text>


<View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        Python
    </Text>
    <Text style={styles.greenbox}>
        Tkinter
    </Text>
    <Text style={styles.greenbox}>
        OpenCV
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
        height:900,
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