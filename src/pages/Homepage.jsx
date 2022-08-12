import {
  Heading,
  Stack,
  Box,
  Link,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import IframeResizer from "iframe-resizer-react";
import Logo from "../images/LOGO1.jpg";

export default function Homepage() {
  return (
    <Layout>
      <Stack>
        <Center>
          <Image boxSize="300px" objectFit="cover" src={Logo} alt="logo" />
        </Center>
        <Center>
          <Text fontSize="6xl">Welcome!</Text>
        </Center>
      </Stack>
    </Layout>
  );
}
