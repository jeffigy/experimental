import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";

export default function DisplayField({ label, name }) {
    return (
        <>
            <Heading as='h4' size='md' color='grey'>
                {label}
            </Heading>
            <Text fontSize='md'>{name}</Text>
        </>
    );
}
