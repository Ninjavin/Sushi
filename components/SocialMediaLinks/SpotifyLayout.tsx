"use client";
import { Box, Button, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const SpotifyLayout = () => {
  return (
    <Box p="5">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        // mt="4"
      >
        <Box>
          <Img
            width="45px"
            height="45px"
            src="https://img.icons8.com/pulsar-color/48/spotify.png"
            alt="Spotify"
            mb="2"
          />
          <Text fontSize={"0.85rem"}>Kya Kasoor hai mera</Text>
          <Text color="blackAlpha.700" fontSize={"0.75rem"} mb="0.5rem">
            85 songs
          </Text>
          <Button bg="green.400" height={"2rem"} fontSize={"0.75rem"}>
            Play
          </Button>
        </Box>
        <Img
          src="https://creatorspace.imgix.net/richdata/spotify/playlists/aHR0cHM6Ly9tb3NhaWMuc2Nkbi5jby82NDAvYWI2NzYxNmQwMDAwYjI3MzA0MGJlZjJmMjE5YmM0ZmVjMWQwZDFmY2FiNjc2MTZkMDAwMGIyNzM2MTY4YmQ2ZTZmMzhhMWM0OTZhYjRjODVhYjY3NjE2ZDAwMDBiMjczNjE2OTRmMDcxZDQwMmExMDkzMWQ2NzFlYWI2NzYxNmQwMDAwYjI3M2I4ZDYyOTAzOTMwNTZhMDRhY2VlMTA3ZA==.jpeg?h=127&dpr=2"
          height={"135px"}
          width="135px"
        />
      </Flex>
    </Box>
  );
};

export default SpotifyLayout;
