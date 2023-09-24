"use client";
import { useProfileContext } from "@/context/ProfileContext";
import {
  Box,
  Flex,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Img,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

type UserData = {
  titlePhoto: string;
  rank: string;
  rating: number;
  handle: string;
  maxRating: number;
  maxRank: string;
};

const CodeforcesLayout = () => {
  const { profiles } = useProfileContext();
  const [userData, setUserData] = useState<UserData>({
    titlePhoto: "",
    rating: 0,
    rank: "",
    maxRating: 0,
    maxRank: "",
    handle: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const getCodeforcesProfile = async (codeforcesUsername: string) => {
    try {
      const response = await axios.get(
        `/api/getCodeforcesProfile?username=${codeforcesUsername}`
      );
      console.log(response);
      const userData = response.data;
      setUserData(userData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching Codeforces profile:", err);
    }
  };

  useEffect(() => {
    if (
      profiles?.codeforcesProfile != "" &&
      profiles?.codeforcesProfile != undefined
    ) {
      getCodeforcesProfile(profiles.codeforcesProfile);
    }
  }, [profiles]);
  return (
    <LinkBox>
      <Box p="5">
        <Skeleton isLoaded={!loading}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            // mt="4"
          >
            <Box>
              <LinkOverlay
                href={`https://codeforces.com/profile/${userData.handle}`}
              >
                <Img
                  width="45px"
                  height="45px"
                  src="https://codeforces.org/s/0/apple-icon-180x180.png"
                  alt="Spotify"
                  mb="2"
                />
                <Text fontSize={"0.85rem"}>{userData.handle}</Text>
                <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
                  Max : {userData.maxRating} ({userData.maxRank})
                </Text>
                <Text>
                  {userData.rank} : {userData.rating}
                </Text>
              </LinkOverlay>
            </Box>
            <Img src={userData.titlePhoto} height={"135px"} width="135px" />
          </Flex>
        </Skeleton>
      </Box>
    </LinkBox>
  );
};

export default CodeforcesLayout;
