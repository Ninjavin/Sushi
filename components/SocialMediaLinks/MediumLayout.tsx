"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const MediumLayout = () => {
  return (
    <Box p="5">
      <Flex
        justifyContent={"space-between"}
        height={"3rem"}
        alignItems={"center"}
        mb="4"
      >
        <Img
          width="54px"
          height="54px"
          src="https://img.icons8.com/sf-regular-filled/48/medium-logo.png"
          alt="Medium"
        />
      </Flex>
      <Text mb="3">Vineeta Jain</Text>
      <Text color="blackAlpha.700" fontSize={"0.75rem"}>
        medium.com/@vinjain2006
      </Text>
    </Box>
  );
};

export default MediumLayout;
