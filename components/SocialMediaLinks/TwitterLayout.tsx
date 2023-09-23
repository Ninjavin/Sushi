"use client";
import { useProfileContext } from "@/context/ProfileContext";
import {
  Box,
  Flex,
  Img,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

type UserData = {
  followers_count: number;
  screen_name: string;
  description: string;
  name: string;
  url: string;
};

const TwitterLayout = () => {
  const { profiles } = useProfileContext();
  const [userData, setUserData] = useState<UserData>({
    followers_count: 0,
    screen_name: "",
    description: "",
    name: "Twitter",
    url: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const getTwitterProfile = async (twitterUsername: string) => {
    try {
      const response = await axios.get(
        `/api/getTwitterProfile?username=${twitterUsername}`
      );
      console.log(response);
      const userData = response.data;
      setUserData(userData);
      setLoading(false);
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
    // <LinkBox>
    <Box p="5">
      <Skeleton isLoaded={!loading}>
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
            <Text>{userData.followers_count}</Text>
          </Flex>
        </Flex>
        {/* <LinkOverlay href={userData.url}> */}
        <Text>{userData.name}</Text>
        {/* </LinkOverlay> */}
        <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
          @{userData.screen_name}
        </Text>
        <Text color="blackAlpha.700" fontSize={"0.75rem"}>
          {userData.description}
        </Text>
      </Skeleton>
    </Box>
    // </LinkBox>
  );
};

export default TwitterLayout;
