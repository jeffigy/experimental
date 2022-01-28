//Temporary Modal To Display Client Information
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Tooltip,
    Text, Heading
} from '@chakra-ui/react'
import React, {useState} from 'react'
import { ViewIcon } from '@chakra-ui/icons'
import DisplayField from '../components/Fields/DisplayField'




export default function ViewPatient({ works }) {
    const [data, setData] = useState([works]);

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Tooltip
                label="View Details"
                aria-label='A tooltip'
            >
                <Button
                    colorScheme='teal'
                    onClick={() => { onOpen() }}
                >
                    <ViewIcon />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Client Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        

                        {data.map(obj => (
                            <>
                                <Heading as='h4' size='md' color='grey'>
                                    Name
                                </Heading>
                                <Text fontSize='md'>{obj.first}</Text>         
                            </>
                        ))}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}