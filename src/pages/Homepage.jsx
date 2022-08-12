import { Heading, Stack, Box, Link, Text, AspectRatio } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import IframeResizer from "iframe-resizer-react";

export default function Homepage() {
  return (
    <Layout>
      <AspectRatio maxW="1920px" ratio={1}>
        {/* <iframe
          title="naruto"
          src="https://drive.google.com/file/d/1rXnT32G4uzVyDN9zeNeFqz-csdTxe_45/preview"
          allowFullScreen
          allowAutoPlay
        /> */}
        <iframe src="https://drive.google.com/file/d/1rXnT32G4uzVyDN9zeNeFqz-csdTxe_45/preview" width="640" height="480" allow="autoplay"></iframe>

      </AspectRatio>
    </Layout>
  );
}
