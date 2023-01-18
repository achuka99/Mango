import { View} from 'react-native'
import React from 'react'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container, useTheme, AspectRatio, Stack, Image, Heading } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";



const HomeScreen = () => {
  const ratio = 2/2
  return (
<View>
<Box
  shadow="2"
  rounded="lg"
  w={{ base: "64", md: "80", lg: "md" }}
  _light={{ bg: "coolGray.50" }}
  _dark={{ bg: "gray.700" }}
>
  <AspectRatio w="100%" ratio={ratio}>
    <Image source={{ uri: 'https://images.unsplash.com/photo-1673377006564-45c061e6cbe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'}} alt="image base" />
  </AspectRatio>
  <Text bold position="absolute" color="coolGray.50" top="0" m="4">
    NEWS
  </Text>
  <Stack space="2" p="4">
    <Text color="gray.400">January 11, 2023</Text>
    <Heading size={["md", "lg", "md"]} fontWeight="medium">
      The Garden City
    </Heading>
    <Text isTruncated noOfLines={["4", "4", "4"]}>
      Bengaluru (also called Bangalore) is the center of India's
      high-tech industry. It is located in southern India on the Deccan
      Plateau.The city is also known for its parks and nightlife.
      Bangalore is the major center of India's IT industry, popularly
      known as the Silicon Valley of India.
    </Text>
  </Stack>
  <HStack space="3" px="4" pb="4">
    {/* <MoreIcon _light={{ color : "emerald.800" }} _dark={{ color : "emerald.300" }} /> */}
    <Text _light={{ color : "emerald.800" }} _dark={{ color : "emerald.300" }}>
      Find out more
    </Text>
  </HStack>
</Box>
</View>
  )
}

export default HomeScreen