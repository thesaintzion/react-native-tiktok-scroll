import React from 'react';
import styles from './style'
import { ImageBackground,  Text, View } from 'react-native';


const  CardItem = (props) => {
   
    const { name, tagline, taglineCTA, image } = props.item.item;
    // console.log('Prop',  props.item)
    return (
    <View style={styles.imgCon}>
        <ImageBackground source={image} style={styles.image}/>
        <View style={styles.title}>
        <Text style={styles.theText}>{ name }</Text>
        </View>

        <View style={[styles.floatAction, styles.left]}>
            {/* <View  style={styles.roundIcon}></View> */}
        </View>
        <View style={[styles.floatAction, styles.right]}>
            <View style={styles.iconsCon}>
           
            <View  style={styles.roundIcon}><Text>4</Text></View>
            <View  style={styles.roundIcon}><Text>3</Text></View>
            <View  style={styles.roundIcon}><Text>2</Text></View>
            <View  style={styles.roundIcon}><Text>1</Text></View>
            </View>
            
        </View>
    </View>
    
    )
}


export default CardItem;
