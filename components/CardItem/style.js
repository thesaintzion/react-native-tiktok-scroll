import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({  
    imgCon: {
    width: '100%',
    height: Dimensions.get('window').height,
  
    
    },
    image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
    },
    title: {
    marginTop:'5%',
    width: '100%',
    justifyContent: "center", 
    alignItems: "center",
    },
    theText:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    },
    left: {
    left: 0
    },

    right: {
    right: 0
    },

    floatAction: {
        // backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: '48%',
        // position: 'relative'
    },
    iconsCon:{
        position: 'absolute',
        bottom: '10%',
        right:0,
        height: '55%',
        // backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 8
    },
    roundIcon:{
        width: 60,
        height:60,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: "center", 
        alignItems: "center",
      
      

    },
   
  });
export default styles;  