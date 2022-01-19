import React from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImWhatsapp } from "react-icons/im";

/** Styles */
import { UnorderedList, ListItem } from "./styles";

const SidebarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Abrir Menu"
        my="4"
        colorScheme="teal"
        borderColor="brand"
        color="brand"
        variant="outline"
        onClick={onOpen}
        icon={<GiHamburgerMenu />}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            Menu principal
          </DrawerHeader>
          <DrawerBody px="0">
            <Stack px={4} pb={4}>
              <InputGroup>
                <Input placeholder="Faça uma busca" />
                <InputRightElement
                  children={
                    <IconButton
                      h="1.85rem"
                      size="sm"
                      aria-label="Faça uma busca"
                      icon={<FaSearch />}
                    />
                  }
                />
              </InputGroup>
            </Stack>

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    px="6"
                    py="3"
                    _expanded={{ bg: "brand", color: "white" }}
                  >
                    <Box flex="1" textAlign="left">
                      Categorias
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="6">
                  <UnorderedList>
                    <ListItem>Casa</ListItem>
                    <ListItem>Terreno</ListItem>
                    <ListItem>Apartamento</ListItem>
                    <ListItem>Área Rural</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    px="6"
                    py="3"
                    _expanded={{ bg: "brand", color: "white" }}
                  >
                    <Box flex="1" textAlign="left">
                      Modalidades
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="6">
                  <UnorderedList>
                    <ListItem>Venda</ListItem>
                    <ListItem>Aluguel</ListItem>
                    <ListItem>Arrendamento</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    px="6"
                    py="3"
                    _expanded={{ bg: "brand", color: "white" }}
                  >
                    <Box flex="1" textAlign="left">
                      Localizações
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel px="6">
                  <UnorderedList>
                    <ListItem>Urbano</ListItem>
                    <ListItem>Rural</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Stack px={4} py={4}>
              <Button
                colorScheme="teal"
                bg="whatsapp"
                color="white"
                rightIcon={<ImWhatsapp />}
              >
                Conversar no WhatsApp
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
