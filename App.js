import React from 'react'
import { NativeBaseProvider, Box,Button } from "native-base";
import { Text, View } from 'react-native';


export default function App() {

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Button shadow={2} onPress={() => console.log("hello world")}>
      Click me
    </Button>
      </Box>
    </NativeBaseProvider>
  )

}
