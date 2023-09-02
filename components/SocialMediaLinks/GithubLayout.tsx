"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const GithubLayout = () => {
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
          src="https://img.icons8.com/pulsar-line/48/github.png"
          alt="github"
        />
      </Flex>
      <Text mb="3">Ninjavin</Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        bg="blackAlpha.800"
        borderRadius="0.5rem"
        p="3"
        fontSize={"0.75rem"}
        color={"white"}
        height={"1.5rem"}
        width={"6rem"}
      >
        <Text mr="2" fontWeight={"500"}>
          Follow
        </Text>
        <Text>30</Text>
      </Flex>
    </Box>
  );
};

export default GithubLayout;
