import React from 'react';
import { View } from 'react-native';
import styles from './style'
import CardItem from '../CardItem';
import data from './data';
import {FlatList,  Dimensions } from 'react-native';



const  CardList = () => {
    return (
    <View style={styles.w100}>
         {/* <CardItem /> */}

      <FlatList
        data={data}
        renderItem={(item) =>  <CardItem item={item}  />}
        keyExtractor={item => item.name}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
        
      />
   
    </View>
    )
}


export default CardList;
