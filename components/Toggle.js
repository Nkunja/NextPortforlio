//Toggle.js

import {
    VStack,
    IconButton,
    useColorMode,
    useColorModeValue,
    Heading,
  } from "@chakra-ui/react";
  import { BsSun, BsMoon } from "react-icons/bs";
  
  function Toggle() {
    // Chakra UI hook that toggle the color mode
    const { toggleColorMode } = useColorMode();
    return (
      <VStack>
        {/* {useColorModeValue(
        //   <Heading>Light Mode</Heading>,
        //   <Heading>Dark Mode</Heading>
        )} */}
        <IconButton
          aria-label="Mode Change"
          variant="outline"
          colorScheme="black"
          size="sm"
          icon={useColorModeValue(<BsMoon />, <BsSun />)}
          onClick={toggleColorMode}
          color={useColorModeValue('gray.800')}
        />
      </VStack>
    );
  }
  
  export default Toggle;
  