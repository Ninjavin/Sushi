"use client";
import { useProfileContext } from "@/context/ProfileContext";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Img,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

type UserPositionGroups = {
  title: string;
  company: string;
};

type UserData = {
  first_name: string;
  sub_title: string;
  last_name: string;
  position_groups: UserPositionGroups;
};

const LinkedInLayout = () => {
  const { profiles } = useProfileContext();
  const [userData, setUserData] = useState<UserData>({
    first_name: "",
    sub_title: "",
    last_name: "",
    position_groups: {
      title: "",
      company: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(true);

  const getLinkedinProfile = async (linkedinUsername: string) => {
    try {
      const response = await axios.post(
        `/api/getLinkedinProfile?username=${linkedinUsername}`
      );
      const tmpData = response.data;

      const userInfo: UserData = {
        first_name: tmpData.first_name,
        last_name: tmpData.last_name,
        sub_title: tmpData.sub_title,
        position_groups: {
          title: tmpData["position_groups"][0]["profile_positions"][0]["title"],
          company:
            tmpData["position_groups"][0]["profile_positions"][0]["company"],
        },
      };

      setUserData(userInfo);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching Linkedin profile:", err);
    }
  };

  useEffect(() => {
    console.log("In useEffect!");
    console.log(profiles);

    if (
      profiles?.linkedinProfile != "" &&
      profiles?.linkedinProfile != undefined
    ) {
      getLinkedinProfile(profiles.linkedinProfile);
    }
  }, [profiles]);

  return (
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
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
        </Flex>
        <Text>
          {userData.first_name} {userData.last_name}
        </Text>
        <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
          {userData.sub_title}
        </Text>
        <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
          {userData.position_groups.title}
        </Text>
      </Skeleton>
    </Box>
  );
};

export default LinkedInLayout;
