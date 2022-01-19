import React from "react";
import Image from "next/image";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Divider
} from "@chakra-ui/react";

/** Components */
import SidebarMenu from '../SidebarMenu';

/** Styles */
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <>
      <Grid
        display={{ base: "none", md: "grid" }}
        h="200px"
        templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
        templateColumns={{ base: "repeat(5, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Image src="/logo.svg" quality={100} width="180" height="180" />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          Test
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          Test 2
        </GridItem>
        <GridItem colSpan={4} bg="tomato">
          Test 3
        </GridItem>
      </Grid>

      <Flex display={{ base: "flex", sm: "none" }}>
        <HeaderWrapper>
          <Image src="/logo.svg" quality={100} width="60" height="60" />
          <Flex direction="column" alignItems="center">
            <Heading as="h5" size="md" color="brand" isTruncated>
              Cavallini Imóveis
            </Heading>
            <Text fontSize="xs" color="gray">
              CRECI 51377
            </Text>
          </Flex>
          <SidebarMenu />
        </HeaderWrapper>
      </Flex>

      <Divider mb={4} width="calc(100% + 32px)" ml="-4" />
    </>
  );
};

export default Header;
