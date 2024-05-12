import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const User = (props) => {
    const [num, setNum] = useState(50)

  return (
   <View style={{backgroundColor:"green", padding: 5}}>
   <Text>Child Component</Text>
   <Text>{num}</Text>
   <Text>{props.name}</Text>
   <Button title='update Props' onPress={() => setNum(props.data)}></Button>
   </View>
  )
}

export default User
