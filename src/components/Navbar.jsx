import { Box, Button, Menu, MenuButton, VStack, MenuItem, useBreakpointValue, Collapse, IconButton, useDisclosure, Text, Stack, Flex, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { logout, currentUser } = useAuth()
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      mb={5}>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.200"
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to='/'>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              fontWeight="600"
            >
              St. Jude Dental Clinic System
            </Text>
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!currentUser &&
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              display={{ base: "none", md: "inline-flex" }}
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}>
              <Link to='/login'>
                Login
              </Link>
            </Button>
            <Link to='/register'>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                colorScheme="purple"
                href={"#"}
                _hover={{
                  bg: "purple.300"
                }}
              >
                Register
              </Button>
            </Link>
          </Stack>
        }
        {currentUser &&
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
              >
                {/* {currentUser.email} */}
                Account
              </MenuButton>
              <MenuList>
                <Link to='/profile'>
                  <MenuItem>
                    Profile
                  </MenuItem>
                </Link>
                <Link to='/logout' name='Logout' onClick={async e => {
                  e.preventDefault()
                  await logout()
                }}
                >
                  <MenuItem>
                    Logout
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Stack>
        }
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box >
  )
}

const MobileNav = () => {
  const { currentUser } = useAuth()
  return (
    <Stack p={4} boxShadow="lg" display={{ md: "none" }}>
      {currentUser &&
        <VStack align="left">
          <Link to='/social-worker' >
            <Text fontWeight={600} color="gray.600" >
              Social Worker
            </Text>
          </Link>
          <Link to='/target-client-list'>
            <Text fontWeight={600} color="gray.600" >
              Target Client List
            </Text>
          </Link>
          <Link to='/reports'>
            <Text fontWeight={600} color="gray.600" >
              Reports
            </Text>
          </Link>
        </VStack>
      }
      {!currentUser &&
        <VStack align="left">
          <Link to='/login' >
            <Text fontWeight={600} color="gray.600" >
              Login
            </Text>
          </Link>
          <Link to='/register'>
            <Text fontWeight={600} color="gray.600" >
              Register
            </Text>
          </Link>
        </VStack>
      }
    </Stack>
  );
};

const DesktopNav = () => {
  const { currentUser } = useAuth()
  return (
    <Stack direction={"row"} spacing={4}>
      {currentUser &&
        <>
          <Link to='/social-worker' >
            <Text fontWeight={600} color="gray.600" >
              Social Worker
            </Text>
          </Link>
          <Link to='/target-client-list'>
            <Text fontWeight={600} color="gray.600" >
              Target Client List
            </Text>
          </Link>
          <Link to='/reports'>
            <Text fontWeight={600} color="gray.600" >
              Reports
            </Text>
          </Link>
        </>
      }
    </Stack>
  );
};

export default Navbar;