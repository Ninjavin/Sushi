"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const PortfolioLayout = () => {
  return (
    <Box p="5">
      <Flex
        justifyContent={"space-between"}
        height={"3rem"}
        alignItems={"center"}
        mb="4"
      >
        <Img
          width="45px"
          height="45px"
          src="https://creatorspace.imgix.net/sites/favicons/aHR0cDovL25pbmphdmluLmdpdGh1Yi5pby9hc3NldHMvZmF2aWNvbi5pY28=.ico?fm=png"
          alt="Ninjavin"
        />
      </Flex>
      <Text mb="3">Ninjavin</Text>
      <Text color="blackAlpha.700" fontSize={"0.75rem"}>
        ninjavin.github.io
      </Text>
    </Box>
  );
};

export default PortfolioLayout;
