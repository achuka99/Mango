import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Pressable, HStack, Badge, Spacer, Flex, VStack, Center, Skeleton, Fab, Icon, StatusBar, IconButton, Avatar, AspectRatio, Image, Stack, Heading, Spinner, useToast, Button } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";


function AppBar() {
  return <>
      {/* <StatusBar bg="white" barStyle="light-content" /> */}
      <Box safeAreaTop bg="white" />
      <HStack bg="white" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="black"  />} />
          <Text color="black" fontSize="20" fontWeight="bold">
            Farmix
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="md" color="black" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="md" color="black" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="md" color="black" />} />
        </HStack>
      </HStack>
    </>;
}

const Users = () => {
  return <HStack justifyContent="center" space={2}>
      <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        AJ
      </Avatar>
      <Avatar bg="cyan.500" source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TE
      </Avatar>
      <Avatar bg="indigo.500" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
        JB
      </Avatar>
      <Avatar bg="amber.500" source={{
      uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
        TS
      </Avatar>
      <Avatar bg="lightBlue.400" source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }} size="md">
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
    </HStack>;
};

const Card = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

function Example() {
  return <Center>
      <AppBar />
      <Users />
      <Card />
    </Center>;
}

export default function App() {
  // 2. Use at the root of your app

  const toast = useToast();
  const ToastDetails = [{
    title: "Account verified",
    variant: "solid",
    description: "Thanks for signing up with us.",
    isClosable: true
  }, {
    title: "Something went wrong",
    variant: "subtle",
    description: "Please create a support ticket from the support page"
  }, {
    title: "Network connection restored",
    variant: "left-accent",
    description: "This is to inform you that your network connectivity is restored",
    isClosable: true
  }, {
    title: "Invalid email address",
    variant: "top-accent",
    description: "Please enter a valid email address"
  }, {
    title: "Invalid email address",
    variant: "outline",
    description: "Please enter a valid email address"
  }];

  const ToastAlert = ({
    id,
    status,
    variant,
    title,
    description,
    isClosable,
    ...rest
  }) => <Alert maxWidth="100%" alignSelf="center" flexDirection="row" status={status ? status : "info"} variant={variant} {...rest}>
      <VStack space={1} flexShrink={1} w="100%">
        <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontWeight="medium" flexShrink={1} color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
              {title}
            </Text>
          </HStack>
          {isClosable ? <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
          color: variant === "solid" ? "lightText" : "darkText"
        }} onPress={() => toast.close(id)} /> : null}
        </HStack>
        <Text px="6" color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
          {description}
        </Text>
      </VStack>
    </Alert>;


  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff">
        {/* <Example />
        <Spinner size="sm"  /> */}
       <Center flex={1}>
      <VStack space={2}>
        {ToastDetails.map((item, index) => <Button key={index} onPress={() => toast.show({
        render: ({
          id
        }) => {
          return <ToastAlert id={id} {...item} />;
        }
      })}>
            {item.variant}
          </Button>)}
      </VStack>
    </Center>
      </Box>
      {/* <HomeScreen /> */}
    </NativeBaseProvider>
  );
}