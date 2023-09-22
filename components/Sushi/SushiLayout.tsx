"use client";
import { Flex, Box } from "@chakra-ui/react";
import ProfileLayout from "../Profile/ProfileLayout";
import LinksLayout from "../Links/LinksLayout";

const SushiLayout = () => {
  return (
    <Flex m={6} justifyContent="center" height="95%" alignItems="center">
      <Box width="35%" p={6} mr={"4%"}>
        <ProfileLayout />
      </Box>
      <Box width="60%" p={6}>
        <LinksLayout />
      </Box>
    </Flex>
  );
};

export default SushiLayout;
