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
import axios from "axios";
import { useEffect, useState } from "react";

type UserData = {
  html_url: string;
  followers: number;
  name: string;
  public_repos: number;
  login: string;
};

const GithubLayout = () => {
  const { profiles } = useProfileContext();
  const [userData, setUserData] = useState<UserData>({
    html_url: "",
    followers: 0,
    name: "",
    public_repos: 0,
    login: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const getGithubProfile = async (githubUsername: string) => {
    try {
      const response = await axios.get(
        `/api/getGithubProfile?username=${githubUsername}`
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
    if (profiles?.githubProfile != "" && profiles?.githubProfile != undefined) {
      getGithubProfile(profiles.githubProfile);
    }
  }, [profiles]);
  return (
    <LinkBox>
      <Box p="5">
        <Skeleton isLoaded={!loading}>
          <Flex
            justifyContent={"space-between"}
            height={"3rem"}
            alignItems={"center"}
            mb="3"
          >
            <Img
              width="45px"
              height="45px"
              src="https://img.icons8.com/pulsar-line/48/github.png"
              alt="github"
            />
          </Flex>
          <LinkOverlay href={userData.html_url}>
            <Text>{userData.login}</Text>
            <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="3">
              {userData.name}
            </Text>
          </LinkOverlay>

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
            <Text>{userData.followers}</Text>
          </Flex>
        </Skeleton>
      </Box>
    </LinkBox>
  );
};

export default GithubLayout;
