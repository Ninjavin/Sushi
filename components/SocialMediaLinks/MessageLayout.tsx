"use client";
import { Box, Center, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const MessageLayout = () => {
  return (
    <Box p="5" textAlign={"center"}>
      <Center color="whiteAlpha.700" height="150px">
        ⚠️ Code that works on Friday, may not work on Monday!
      </Center>
    </Box>
  );
};

export default MessageLayout;
