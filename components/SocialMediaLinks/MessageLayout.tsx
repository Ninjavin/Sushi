"use client";
import { useProfileContext } from "@/context/ProfileContext";
import { Box, Center, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MessageLayout = () => {
  const { profiles } = useProfileContext();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (profiles?.coolMessage != "" && profiles?.coolMessage != undefined) {
      setMessage(profiles.coolMessage);
    }
  }, [profiles]);
  return (
    <Box p="5" textAlign={"center"}>
      <Center color="whiteAlpha.700" height="150px">
        {message}
      </Center>
    </Box>
  );
};

export default MessageLayout;
