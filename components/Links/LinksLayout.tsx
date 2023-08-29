"use client";
import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";

const LinksLayout = () => {
  return (
    <Box>
      <Grid
        h="600px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={2} bg="blue" />
        <GridItem colSpan={1} bg="blue.100" />
        <GridItem colSpan={1} bg="black" />
        <GridItem colSpan={2} bg="green" />
        <GridItem rowSpan={1} colSpan={2} bg="black" />
        <GridItem colSpan={1} bg="blue.100" />
        <GridItem colSpan={1} bg="black" />
        <GridItem colSpan={1} bg="blue.100" />
        <GridItem colSpan={1} bg="black" />
      </Grid>
    </Box>
  );
};

export default LinksLayout;
