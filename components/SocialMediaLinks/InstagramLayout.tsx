"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const InstagramLayout = () => {
  return (
    <Box p="5">
      <Flex
        justifyContent={"space-between"}
        height={"3rem"}
        alignItems={"center"}
        mb="4"
      >
        <Img
          width="48px"
          height="48px"
          src="https://img.icons8.com/color/48/instagram-new--v1.png"
          alt="instagram"
        />
      </Flex>
      <Text mb="2">@n.i.n.j.a.v.i.n</Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        bg="#2875CA"
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
        <Text>188</Text>
      </Flex>
    </Box>
  );
};

export default InstagramLayout;
