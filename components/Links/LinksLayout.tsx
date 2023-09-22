"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import TwitterLayout from "../SocialMediaLinks/TwitterLayout";
import LinkedInLayout from "../SocialMediaLinks/LinkedInLayout";
import GithubLayout from "../SocialMediaLinks/GithubLayout";
import SpotifyLayout from "../SocialMediaLinks/SpotifyLayout";
import MessageLayout from "../SocialMediaLinks/MessageLayout";
import PortfolioLayout from "../SocialMediaLinks/PortfolioLayout";
import InstagramLayout from "../SocialMediaLinks/InstagramLayout";
import MediumLayout from "../SocialMediaLinks/MediumLayout";
import YouTubeLayout from "../SocialMediaLinks/YouTubeLayout";

const LinksLayout = () => {
  return (
    <Box>
      <Grid
        h="600px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <GridItem
          rowSpan={1}
          colSpan={2}
          borderRadius={"1.5rem"}
          bg="#F5FAFE"
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <TwitterLayout />
        </GridItem>
        <GridItem
          colSpan={1}
          borderRadius={"1.5rem"}
          bg="#F0F6F9"
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <LinkedInLayout />
        </GridItem>
        <GridItem
          colSpan={1}
          borderRadius={"1.5rem"}
          bg="whiteAlpha.400"
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <GithubLayout />
        </GridItem>
        <GridItem
          colSpan={2}
          borderRadius={"1.5rem"}
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
          bg="#EDFCF3"
        >
          <SpotifyLayout />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={2}
          bg="black"
          borderRadius={"1.5rem"}
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <MessageLayout />
        </GridItem>
        <GridItem
          colSpan={1}
          bg="whiteAlpha.400"
          borderRadius={"1.5rem"}
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <PortfolioLayout />
        </GridItem>
        <GridItem
          colSpan={1}
          bg="whiteAlpha.400"
          borderRadius={"1.5rem"}
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <InstagramLayout />
        </GridItem>
        <GridItem
          colSpan={1}
          bg="whiteAlpha.400"
          borderRadius={"1.5rem"}
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <MediumLayout />
        </GridItem>
        <GridItem
          colSpan={1}
          bg="#FFEFEF"
          borderRadius={"1.5rem"}
          boxShadow={"1px 1px 3px 0px rgba(157, 178, 217, 1)"}
        >
          <YouTubeLayout />
        </GridItem>
        {/* <GridItem colSpan={1} bg="black" /> */}
      </Grid>
    </Box>
  );
};

export default LinksLayout;
