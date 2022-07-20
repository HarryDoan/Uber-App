import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
      query={{ key: 'AIzaSyDvCbBdLa5oa60mmrWO3okXJi929ya_ZUo'}}
      onPress={(data, details = null) => {
        console.log('data', data.description);
        const city = data.description.split(',')[0];
        cityHandler(city);
      }}
      placeholder="Search"
      styles={{
        textInput:{
            backgroundColor: '#eeee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
        },
        textInputContainer:{
            backgroundColor: '#eeee',
            borderRadius: 50,
            marginRight: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }
      }}
      renderLeftButton={() => (
        <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} color="black" />
        </View>
      )}
      renderRightButton={() => (
        <View style={{flexDirection: 'row', 
            padding: 9,
            backgroundColor: '#ffff',
            borderRadius: 30,
            marginRight: 8,
            alignItems: 'center',    
        }}>
            <AntDesign name="clockcircle" size={11} color="black" style={{marginRight: 5}} />
            <Text>
                Search
            </Text>
        </View>
      )}
      />
    </View>
  )
}