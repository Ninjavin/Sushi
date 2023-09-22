"use client";
import { useProfileContext } from "@/context/ProfileContext";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import axios from "axios";

const TwitterLayout = () => {
  const { profiles } = useProfileContext();

  const getTwitterProfile = async (twitterUsername: string) => {
    try {
      const response = await axios.get(
        `/api/getTwitterProfile?username=${twitterUsername}`
      );
      console.log(response);
    } catch (err) {
      console.error("Error fetching Twitter profile:", err);
    }
  };

  useEffect(() => {
    console.log("In useEffect!");
    console.log(profiles);

    if (
      profiles?.twitterProfile != "" &&
      profiles?.twitterProfile != undefined
    ) {
      getTwitterProfile(profiles.twitterProfile);
    }
  }, [profiles]);

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
          src="https://img.icons8.com/color/48/twitter--v3.png"
          alt="twitter--v3"
        />
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          bg="#55ACEE"
          borderRadius="0.8rem"
          p="3"
          fontSize={"0.75rem"}
          color={"white"}
          height={"1.5rem"}
        >
          <Text mr="2" fontWeight={"500"}>
            Follow
          </Text>
          <Text>330</Text>
        </Flex>
      </Flex>
      <Text>Twitter</Text>
      <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
        @vineeta_vj
      </Text>
      <Text color="blackAlpha.700" fontSize={"0.75rem"}>
        22yo | Engineering @Oracle | Ex- Project Intern @Oracle | Ex- swe intern
        @theinternetfolk | I put the win in Vineeta 💫 | Engineer 💪| Writer ✍️|
        Quizzer ✌️
      </Text>
    </Box>
  );
};

export default TwitterLayout;
