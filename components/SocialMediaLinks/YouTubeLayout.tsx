"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const YouTubeLayout = () => {
  return (
    <Box p="5">
      <Flex
        justifyContent={"space-between"}
        height={"3rem"}
        alignItems={"center"}
        mb="2"
      >
        <Img
          width="48px"
          height="48px"
          src="https://img.icons8.com/fluency/48/youtube-play.png"
          alt="youtube"
        />
      </Flex>
      <Text mb="5">Vineeta Jain</Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        bg="#FF0001"
        borderRadius="0.5rem"
        p="3"
        fontSize={"0.75rem"}
        color={"white"}
        height={"1.5rem"}
        width={"7rem"}
      >
        <Text mr="2" fontWeight={"500"}>
          Subscribe
        </Text>
        <Text>45</Text>
      </Flex>
    </Box>
  );
};

export default YouTubeLayout;
