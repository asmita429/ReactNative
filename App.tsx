import React, {useState} from 'react';
import {Text, View, Button,} from 'react-native';
import CompanyData from './components/CompanyData';
import User from './components/User';

const App= () => {
  // state data cannot be shared, instead we share props.
  let data = 10;
 
  const fruit = (val: string) => {
    console.warn("function called", val)
    data = 20;
    // console.warn(data);
  }
  const [name, setName] = useState("Asmita");
  function testName() {
    setName("Subash")
  }

  
  return (
   <View>
    <Text style={{fontSize:30}}>Hello React native</Text>
    <Text style={{fontSize:20}}>Learn</Text>
    <Text style={{fontSize:20}}>Code</Text>

    {/* <Button title='On Press' color={'green'} onPress={fruit}/> */}
    <Button title='On Press 2' color={'blue'} onPress={() => fruit("asmita")}/>
    <Text style={{fontSize:20}}>{data}</Text>

    <Text style={{fontSize: 20}}>{name}</Text>
    <Button title='update Name' onPress={testName}/>

    <CompanyData />
    <UserData />

    <User data={data} name={name}/>

   </View>
  );
}

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 10}}>Name: Asmita </Text>
      <Text style={{fontSize: 10}}>Age: 24 </Text>
      <Text style={{fontSize: 10}}>Blood Group: A+</Text>
      <Text style={{fontSize: 10}}>Email: name@gmail.com</Text>
    </View>
  );
};


export default App;
