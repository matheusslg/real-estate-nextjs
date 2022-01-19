import styled, { css } from "styled-components";
import {
  ListItem as ChakraListItem,
  UnorderedList as ChakraUnorderedList,
} from "@chakra-ui/react";

const UnorderedList = styled(ChakraUnorderedList)`
  list-style: none;
  margin: 0;
`;

const ListItem = styled(ChakraListItem)`
  padding: 6px 0;
`;

export { UnorderedList, ListItem };
