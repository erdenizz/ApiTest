import React, {useState, useEffect} from 'react'
import {SafeAreaView, Text, View, Button, ActivityIndicator, FlatList, Alert} from 'react-native'
import axios from 'axios'

import { Item } from './components'
import { SearchBar } from './components/SearchBar'



const App = () => {
  const[myList, setList] = useState([])
  const[myOriginalList, setOriginalList] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, []) 

  const fetchData = async () =>{
  try{
    setLoading(true)

    let response = await axios.get("https://rallycoding.herokuapp.com/api/music_albums").catch(err => { throw err})
    
    setList(response.data)
    setOriginalList(response.data)
    setLoading(false)

  } catch(error){
    setLoading(false)
    Alert.alert("My App", "Bir hata oluştu")

  }
  
    
  }

  const searchSong = (text) =>{
    let filteredList = myOriginalList.filter(function (item){
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1

    })
    setList(filteredList)
  }

  const renderSongs = ({item}) => {
    return(
    <Item data ={item} />
      ) 
  }

    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex:1}}>
           
            <SearchBar onSearch={searchSong}/>

            <FlatList
            refreshing ={loading}
            onRefresh = {fetchData}
            keyExtractor = {(item , index)=> index.toString() }
            data={myList}
            renderItem={renderSongs}
            />
                       
            </View>

        </SafeAreaView>

    )

}

export default App