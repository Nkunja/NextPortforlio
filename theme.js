import { extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles: {
      global: (props) => ({
        body: {
          color: props.colorMode === "dark" ? "white" : "black",
          bg: props.colorMode === "dark" ? "black" : "white",
        },
      }),
    },
  });

export default theme;