import {
  Heading,
  Stack,
  Box, Link, Text
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import IframeResizer from "iframe-resizer-react";

export default function Homepage() {
  return (
    <Layout>

        <IframeResizer
                log
                src="https://gulaneskorp.betteruptime.com/"
                style={{ width: '1px', minWidth: '100%', minHeight: '700px'}}
            />
     
    </Layout>

  )
}

