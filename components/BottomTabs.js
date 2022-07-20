import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
  return (
    <View style={{margin: 10, flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between'}}>
        <Icon name="home" size={25} color="#000" text="Home"  />
        <Icon name="search" size={25} color="#000" text="Browse"  />
        <Icon name="shopping-bag" size={25} color="#000" text="Grocery"  />
        <Icon name="receipt" size={25} color="#000" text="Order"  />
        <Icon name="user" size={25} color="#000" text="Account"  />
    </View>
  )
}

const Icon = (props) => {
    return (
        <View >
            <FontAwesome5 name={props.name} size={props.size} color={props.color} style={{marginBottom: 3, alignSelf: 'center'}} />
            <Text>
                {props.text}
            </Text>
        </View>
    )
}