import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

/** Styles */
import { PropertyCardDiv } from "./styles";

const PropertyCard = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Casa moderna em São Luiz Gonzaga",
    formattedPrice: "R$ 190.000,00"
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" bg="brand" color="white">
            Novo
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} quartos &bull; {property.baths} banheiros
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          {/* <Box as="span" color="gray.600" fontSize="sm">
            / mês
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCard;
