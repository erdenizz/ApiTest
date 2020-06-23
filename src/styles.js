import {StyleSheet, Dimensions} from 'react-native'

const styles = {
    item : StyleSheet.create({
        container : {
            backgroundColor: '#eceff1',
            margin : 5,
            padding: 10,
            borderRadius: 10,
        },
        songName:{
            fontSize : 15,
            fontWeight: 'bold'
        },
        artistName:{
            color : 'gray'
        },
        image:{
            height : Dimensions.get("window").height/2,
          
        }
    }),
    searchBar: StyleSheet.create({
        container:{
            backgroundColor:'#fff3e0',
            margin : 10,
            padding:5,
            borderRadius:10,
            elevation:2,
            
        }
    })
}

export default styles