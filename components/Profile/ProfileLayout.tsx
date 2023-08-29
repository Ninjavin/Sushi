"use client";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

const ProfileLayout = () => {
  return (
    <Box>
      <Img
        borderRadius={"full"}
        height={"184px"}
        width={"184px"}
        src="https://creatorspace.imgix.net/users/clljmuy9u001nqg01vks71myh/j1cHxlIA3ljaXHxr-Profile.jpg?w=300&h=300"
        mb="5"
      />
      <Text fontWeight="bold" fontSize={"2.5rem"} mb="2">
        Ninjavin
      </Text>
      <Text fontSize={"1.2rem"} color="gray.500">
        My name is Vineeta. I am a 2022 CSE graduate. An engineer, a learner & a
        writer. I believe in the power of Indie folk music and MS Dhoni&apos;s
        last ball six. I go by the name Ninjavin on the Internet.
      </Text>
    </Box>
  );
};

export default ProfileLayout;
