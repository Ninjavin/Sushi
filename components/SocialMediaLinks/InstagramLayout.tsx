"use client";
import { useProfileContext } from "@/context/ProfileContext";
import { Box, Flex, Img, Skeleton, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

type UserData = {
  followers: number;
  following: number;
  full_name: string;
  username: string;
};

const InstagramLayout = () => {
  const { profiles } = useProfileContext();
  const [userData, setUserData] = useState<UserData>({
    followers: 0,
    following: 0,
    full_name: "",
    username: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const getInstagramProfile = async (instagramUsername: string) => {
    try {
      const response = await axios.get(
        `/api/getInstagramProfile?username=${instagramUsername}`
      );
      console.log(response);
      // if (response.status = "ok")
      const userData = response.data.data;
      setUserData(userData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching Instagram profile:", err);
    }
  };

  useEffect(() => {
    console.log("In useEffect!");
    console.log(profiles);

    if (
      profiles?.instagramProfile != "" &&
      profiles?.instagramProfile != undefined
    ) {
      getInstagramProfile(profiles.instagramProfile);
    }
  }, [profiles]);

  return (
    <Box p="5">
      <Skeleton isLoaded={!loading}>
        <Flex
          justifyContent={"space-between"}
          height={"3rem"}
          alignItems={"center"}
          mb="2"
        >
          <Img
            width="48px"
            height="48px"
            src="https://img.icons8.com/color/48/instagram-new--v1.png"
            alt="instagram"
          />
        </Flex>
        <Text>{userData.full_name}</Text>
        <Text mb="5" color="blackAlpha.700" fontSize={"0.75rem"}>
          @{userData.username}
        </Text>
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
          <Text>{userData.followers}</Text>
        </Flex>
      </Skeleton>
    </Box>
  );
};

export default InstagramLayout;
