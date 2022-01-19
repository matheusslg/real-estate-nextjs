import Head from "next/head";
import {
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";

/** Components */
import Header from "../../components/Header";
import PropertyCard from "../../components/PropertyCard";

import { ImWhatsapp } from "react-icons/im";

const Home = ({ properties }) => {
  return (
    <Container maxW="container.xl">
      <Header />

      <Flex direction="column" alignItems="center" pb={4}>
        <Box borderWidth={1} borderRadius={12} py={4} px={4}>
          <Button
            colorScheme="teal"
            bg="whatsapp"
            color="white"
            width="100%"
            mb={2}
            rightIcon={<ImWhatsapp />}
          >
            Conversar no WhatsApp
          </Button>
          <Text fontSize="sm" color="gray" textAlign="center">
            Deseja um atendimento especial? Entre agora mesmo em contato via
            WhatsApp para lhe atendermos diretamente!
          </Text>
        </Box>
      </Flex>

      <Flex direction="column" alignItems="center" pb={4}>
        <Box borderWidth={1} borderRadius={12} py={7} px={4}>
          <Heading
            as="h3"
            size="md"
            lineHeight={1.4}
            pb={2}
            color="brand"
            textAlign="center"
          >
            Chegou a hora de encontrar o imóvel perfeito para você!
          </Heading>
          <Text fontSize="sm" color="gray" textAlign="center">
            Confira nossa lista completa de imóveis abaixo.
          </Text>
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: 6, lg: 12 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((property, index) => (
          <PropertyCard key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const countries = await response.json();

//   return {
//     props: {
//       countries: countries.map((country) => ({
//         name: country.name.common,
//         cca2: country.cca2,
//         population: country.population,
//       })),
//     },
//   };
// }
