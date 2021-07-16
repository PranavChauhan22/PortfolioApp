import React from 'react'
import { View, Text,Image,ScrollView, SafeAreaView,StyleSheet, Button, Platform,Modal } from 'react-native'
import {useState} from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProjectsScreen from './ProjectsScreen'

export default function PortfolioWebsite({value}) {
    const [state, setstate] = useState(1)
    const [vis, setvis] = useState(value)
    var img
    var img1=require(`../assets/Myblogimg1.png`)
    var img2=require(`../assets/Myblogimg2.png`)
    var img3=require(`../assets/Myblogimg3.png`)
    var img4=require(`../assets/Myblogimg4.png`)
    var img5=require(`../assets/Myblogimg5.png`)
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
    else if (state==4) {
        img=img5
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
    
    <MaterialCommunityIcons name='arrow-left-drop-circle' size={40} color='#000FFF' onPress={()=>setstate((state!=0)?((state-1)%5):4)}/>
    <MaterialCommunityIcons name='arrow-right-drop-circle' size={40} color='#000FFF' onPress={()=>setstate((state+1)%5)}/>
    </View>
    <View style={styles.headtext}>
        <Text style={styles.texthead}>About Project</Text>
    </View>
    <View style={styles.bodytext}>
    <Text style={styles.textbody}>I have created a responsive website using HTML,CSS and Js for frontend and NodeJs with mongodb for Backend.
It was a great experience for building a great website.It contains various sections including great animations and transitions.The best section of my website is interactive resume created by lot of regular efforts.I also have experience of ReactJs which is the emerging tech in web development.
In brief I learned how various platforms interconnect to build a crazy website.I hope that the viewer will enjoy the features of website and looking forward to work with great techies.

Must go through the video as it describes my whole website in an easy manner.
</Text>
<Text style={styles.sectext}>

The sections of the website are:
</Text>
<Text style={styles.textbody}>
1) Home page containing the navbar with cool animations from where we can switch to various pages.

</Text>
<Text style={styles.textbody}>

2) About page includes navbar,carousel and cards with search bar and follow link which switches to a page containing options to switch to GitHub,twitter or linkedin account.

</Text>
<Text style={styles.textbody}>

3) Interactive resume which is the best feature created by a lot of efforts which is basically a game played by arrow keys and let the viewer explore my resume.

</Text>
<Text style={styles.sectext}>
    Challenges i ran into :
</Text>
<Text style={styles.textbody}>
There were many challenges as it was my first website but the spirit to develop something new helped me to develop a great website for my community.
</Text>
<Text style={styles.sectext}>
    Tech Stacks Used :
</Text>
<View style={styles.techgrid}>
    <Text style={styles.greenbox}>
        HTML5
    </Text>
    <Text style={styles.greenbox}>
        CSS3
    </Text>
    <Text style={styles.greenbox}>
        NodeJs
    </Text>
    <Text style={styles.greenbox}>
       MongoDb
    </Text>
    <Text style={styles.greenbox}>
        JavaScript
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
        <MaterialCommunityIcons name='dev-to' size={30} style={styles.icon}/>
    <Text style={styles.bluebox}>
        https://devfolio.co/@PranavDevelops
    </Text>



</View>
    </View>

      </ScrollView>
</SafeAreaView>

</Modal>
    )
}}

const styles = StyleSheet.create({
    headtext:{fontSize:20,fontWeight:'bold',lineHeight:20},
    img:{
        width:400,
        height:250,
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