import { View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import { Divider } from 'react-native-elements';
import React, { useState, useEffect } from 'react'

import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Category from '../components/Category'
import RestaurantItems, { localRestaurant } from '../components/RestaurantItems'
import BottomTabs from '../components/BottomTabs'

export default function Home() {
  const [ restaurantData, setRestaurantData ] = useState(localRestaurant);
  const [ city, setCity ] = useState('Chicago');
  const [ activeTab, setActiveTab] = useState('Delivery');
  const YeldAPIKey = ` ${city}`;

  const getItemInYeldAPI = () => {

    const apiOptions = "Bearer " + YeldAPIKey;
   
    const yeldUrl = "https://api.yeld.io/v1/search?q=restaurants&location=New%20York%2C%20NY";
    
    return fetch(yeldUrl, apiOptions)  
      .then(response => response.json())
      .then(json => setRestaurantData(json.businesses.filter(businesses => businesses.transactions.includes(activeTab.toLowerCase()))))
  }

  useEffect(() => {
    // getItemInYeldAPI();
  }, [city, activeTab])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eeee'}}>
      <StatusBar backgroundColor="#eeee" barStyle="dark-content" />
      <View style={{backgroundColor: '#ffff', padding: 15, }}>
      <HeaderTabs  activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Category/>
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width= {1} /> 
      <BottomTabs />
    </SafeAreaView>
  )
}