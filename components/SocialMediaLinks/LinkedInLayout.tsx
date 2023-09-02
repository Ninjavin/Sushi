"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const LinkedInLayout = () => {
  return (
    <Box p="5">
      <Flex
        justifyContent={"space-between"}
        height={"3rem"}
        alignItems={"center"}
        // mt="4"
      >
        <Img
          width="45px"
          height="45px"
          src="https://img.icons8.com/fluency/48/linkedin.png"
          alt="linkedin"
        />
      </Flex>
      <Text>Vineeta Jain</Text>
      <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
        Associate Software Developer
      </Text>
    </Box>
  );
};

export default LinkedInLayout;
