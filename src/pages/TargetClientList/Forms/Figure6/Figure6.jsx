import { Button } from '@chakra-ui/button'
import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormHelperText, FormLabel, } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightAddon, } from '@chakra-ui/input'
import { Box, SimpleGrid, GridItem, VStack, HStack, Text, Divider, Stack } from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import React, { useState } from 'react'

export default function Figure6() {
    const [fim, setFim] = useState("");
    const [syphilisScreening, setSyphilisScreening] = useState("");
    const [hepatitisBScreening, setHepatitisBScreening] = useState("");
    const [gestationalDiabetes, setGestationalDiabetes] = useState("");
    const [cbc, setCbc] = useState("");
    const [sex, setSex] = useState("");
    const [outcome, setOutcome] = useState("");
    const [delivery, setDelivery] = useState("");
    const [type, setType] = useState("");
    const [ownership, setOwnership] = useState("");
    const [birthAttendant, setBirthAttendant] = useState("");
    return (
        <Box boxShadow={'lg'} p={8}>
            <VStack spacing={3} alignItems="flex-start">
                <FormControl>
                    <SimpleGrid columns={12} gap={3}>
                        <GridItem colSpan={12}>
                            {/* Figure 6 */}
                            <SimpleGrid columns={12} gap={3}>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Date of Registration
                                    </FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Family Serial No.
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        First Name
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        Middle Name
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <FormLabel>
                                        Last Name
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Address
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Socio-Economic Status
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <FormLabel>
                                Age
                            </FormLabel>
                            <HStack>
                                <Input type="text" placeholder="10-14 y/o" />
                                <Input type="text" placeholder="15-19 y/o" />
                                <Input type="text" placeholder="20-49 y/o" />
                            </HStack>
                            <FormHelperText>
                                Input on the proper category
                            </FormHelperText>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormLabel>
                                LMP
                            </FormLabel>
                            <VStack>
                                <Input type="text" placeholder="LMP" />
                                <Input type="text" placeholder="G-P" />
                            </VStack>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <FormLabel>
                                EDC
                            </FormLabel>
                            <Input type="date" />
                        </GridItem>
                        <GridItem colSpan={12}>
                            <Text align="center" fontSize="2xl">
                                Dates of Pre-natal Check-ups
                            </Text>
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel>
                                1st Tri
                            </FormLabel>
                            <Input type="date" />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel>
                                2nd Tri
                            </FormLabel>
                            <Input type="date" />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel>
                                3rd Tri
                            </FormLabel>
                            <Input type="date" />
                        </GridItem>
                        {/* Figure 7 */}
                        {/* Immunization Status */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Immunization Status
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <VStack spacing={3} align='stretch'>
                                <Text fontSize="xl">
                                    Date Tetanus diptheria(Td) or Tetanus Toxoid (TT) given
                                </Text>
                                <SimpleGrid columns={10} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td1/TT1
                                        </FormLabel>
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td2/TT2
                                        </FormLabel>
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td3/TT3
                                        </FormLabel>
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td4/TT4
                                        </FormLabel>
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Td5/TT5
                                        </FormLabel>
                                        <Input type="date" />
                                    </GridItem>
                                </SimpleGrid>
                                <HStack>
                                    <FormLabel>
                                        FIM Status
                                    </FormLabel>
                                    <RadioGroup onChange={setFim} value={fim}>
                                        <HStack>
                                            <Radio value='check'>✓</Radio>
                                            <Radio value='x'>X</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </HStack>
                            </VStack>
                        </GridItem>
                        {/* Micronutrient Supplementation */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Micronutrient Supplementation
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            {/* Iron sulfate with Folic Acid */}
                            <VStack spacing={3} align='stretch'>
                                <Text fontSize="xl">
                                    Iron sulfate with Folic Acid
                                </Text>
                                <SimpleGrid columns={8} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            1st visit (1st tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            2nd visit (2nd tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            3rd visit (3rd tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            4th visit (3rd tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Date and Number of tablets given</FormHelperText>
                                {/* Calcium Carbonate */}
                                <Text fontSize="xl">
                                    Calcium Carbonate
                                </Text>
                                <SimpleGrid columns={6} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            2nd visit (2nd tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            3rd visit (3rd tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            4th visit (3rd tri)
                                        </FormLabel>
                                        <Input type="number" placeholder="#" />
                                        <Input type="date" />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Date and Number of tablets given</FormHelperText>
                                {/* Iodine Capsules */}
                                <Text fontSize="xl">
                                    Iodine Capsules
                                </Text>
                                <SimpleGrid columns={6}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            1st visit
                                        </FormLabel>
                                        <Input type="date" />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Data 2 capsules given</FormHelperText>
                            </VStack>
                        </GridItem>
                        {/* Nutritional Assessment */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Nutritional Assessment
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <VStack spacing={3} align='stretch'>
                                <SimpleGrid columns={6} gap={2}>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Low
                                        </FormLabel>
                                        <Input type="number" placeholder="< 18.5" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            Normal
                                        </FormLabel>
                                        <Input type="number" placeholder="18.5 - 22.9" />
                                    </GridItem>
                                    <GridItem colSpan={2}>
                                        <FormLabel>
                                            High
                                        </FormLabel>
                                        <Input type="number" placeholder="≥ 23" />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Wrtie the BMI for 1st Tri</FormHelperText>
                            </VStack>
                        </GridItem>
                        {/* Deworming Tablet */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Deworming Tablet
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <VStack spacing={3} align='stretch'>
                                <SimpleGrid columns={6} gap={2}>
                                    <GridItem colSpan={2}>
                                        <Input type="date" />
                                    </GridItem>
                                </SimpleGrid>
                                <FormHelperText>Date Given, 2nd or 3rd Tri</FormHelperText>
                            </VStack>
                        </GridItem>
                        {/* Infectious Disease Surveillance */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Infectious Disease Surveillance
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Syphilis Screening */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="xl">
                                        Syphilis Screening
                                    </Text>
                                    <FormHelperText>RPR or RDT Result</FormHelperText>
                                    <Input type="date" />
                                    <RadioGroup onChange={setSyphilisScreening} value={syphilisScreening}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Hepatitis B Screening */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="xl">
                                        Hepatitis B Screening
                                    </Text>
                                    <FormHelperText>Result HBsAg Test</FormHelperText>
                                    <Input type="date" />
                                    <RadioGroup onChange={setHepatitisBScreening} value={hepatitisBScreening}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* HIV Screening */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="xl">
                                        HIV Screening
                                    </Text>
                                    <FormHelperText>Date screened</FormHelperText>
                                    <Input type="date" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Laboratory Screening */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Laboratory Screening
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Gestational Diabetes */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Gestational Diabetes
                                    </Text>
                                    <FormLabel>Date Screened</FormLabel>
                                    <Input type="date" />
                                    <RadioGroup onChange={setGestationalDiabetes} value={gestationalDiabetes}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Hepatitis B Screening */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        CBC/Hgb {`&`} Hct Count
                                    </Text>
                                    <FormLabel>Date Screened</FormLabel>
                                    <Input type="date" />
                                    <RadioGroup onChange={setCbc} value={cbc}>
                                        <HStack>
                                            <Radio value='positive'>+ Positive</Radio>
                                            <Radio value='negative'>- Negative</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    <FormLabel>
                                        Given Iron
                                    </FormLabel>
                                    <Input type="text" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Pregnancy Outcome */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Pregnancy Outcome
                            </Text>
                            <FormHelperText>Obtain data from the health facility record and LCR and reconcile to avoid double reporting</FormHelperText>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Date Terminated */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Date Terminated
                                    </Text>
                                    <Input type="date" />
                                </GridItem>
                                {/* Outcome */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Outcome
                                    </Text>
                                    <RadioGroup onChange={setOutcome} value={outcome}>
                                        <HStack>
                                            <Radio value='full term'>Full Term</Radio>
                                            <Radio value='pre term'>Pre Term</Radio>
                                            <Radio value='fatal death'>Fatal Death</Radio>
                                            <Radio value='abortion/miscarriage'>Abortion/Miscarriage</Radio>
                                        </HStack>
                                    </RadioGroup>
                                    <FormLabel>Sex</FormLabel>
                                    <RadioGroup onChange={setSex} value={sex}>
                                        <HStack>
                                            <Radio value='m'>M</Radio>
                                            <Radio value='f'>F</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Type of Delivery */}
                                <GridItem colSpan={6}>
                                    <Text fontSize="xl">
                                        Type of Delivery
                                    </Text>
                                    <RadioGroup onChange={setDelivery} value={delivery}>
                                        <HStack>
                                            <Radio value='cd'>Caesarian Section</Radio>
                                            <Radio value='vd'>Vaginal Delivery</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Birth Weight */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Birth Weight
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Low */}
                                <GridItem colSpan={4}>
                                    <FormLabel>Low</FormLabel>
                                    <InputGroup>
                                        <Input type="number" />
                                        <InputRightAddon children='g' />
                                    </InputGroup>
                                    <FormHelperText>{`<`} 2,500 grams</FormHelperText>
                                </GridItem>
                                {/* Normal */}
                                <GridItem colSpan={4}>
                                    <FormLabel>Low</FormLabel>
                                    <InputGroup>
                                        <Input type="number" />
                                        <InputRightAddon children='g' />
                                    </InputGroup>
                                    <FormHelperText>{`≥`} 2,500 grams</FormHelperText>
                                </GridItem>
                                {/* Unknown */}
                                <GridItem colSpan={4}>
                                    <FormLabel>Unknown</FormLabel>
                                    <Checkbox size='lg'></Checkbox>
                                    <FormHelperText>Place a check if unknown</FormHelperText>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Place of Delivery */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Place of Delivery
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Health Facility */}
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Health Facility
                                    </Text>
                                    <FormLabel>Type</FormLabel>
                                    <RadioGroup onChange={setType} value={type}>
                                        <HStack>
                                            <Radio value='bhs'>BHS</Radio>
                                            <Radio value='rhu/mhc'>RHU/MHC</Radio>
                                            <Radio value='lying-in'>Lying-in</Radio>
                                            <Radio value='hospital'>Hospital</Radio>
                                            <Radio value='birthing homes'>Birthing Homes</Radio>
                                            <Radio value='doh-licensed ambulance'>DOH-Licensed Ambulance</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Outcome */}
                                <GridItem colSpan={6}>
                                    <FormLabel>BEmONC/CEmONC capable</FormLabel>
                                    <Checkbox size='lg'></Checkbox>
                                </GridItem>
                                {/* Ownership */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Ownership</FormLabel>
                                    <RadioGroup onChange={setOwnership} value={ownership}>
                                        <HStack>
                                            <Radio value='public'>Public</Radio>
                                            <Radio value='private'>Private</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={6}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Non-Health Facility */}
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Non-Health Facility
                                    </Text>
                                    <Input type="text" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Birth Attendant */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Birth Attendant</FormLabel>
                                    <RadioGroup onChange={setBirthAttendant} value={birthAttendant}>
                                        <HStack>
                                            <Radio value='md'>Doctor</Radio>
                                            <Radio value='rn'>Nurse</Radio>
                                            <Radio value='mw'>Midwife</Radio>
                                            <Radio value='h'>Hilot/TBA</Radio>
                                            <Radio value='o'>Others</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </GridItem>
                                {/* Remarks */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Remarks</FormLabel>
                                    <Input type="text" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Date and Time of Delivery */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Date and Time of Delivery
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Date */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Date</FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                {/* Time */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Time</FormLabel>
                                    <Input type="time" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Date of Mothers with their Newborns' Post-Partum Check-ups */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Date of Mothers with their Newborns' Post-Partum Check-ups
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>
                            <SimpleGrid columns={12} gap={2}>
                                {/* Within 24 hours after delivery */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Within 24 hours after delivery</FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                {/* Within 7 days after delivery */}
                                <GridItem colSpan={6}>
                                    <FormLabel>Within 7 days after delivery</FormLabel>
                                    <Input type="date" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Micronutrient Supplementation */}
                        <GridItem colSpan={12}>
                            <Divider />
                            <Text fontSize="4xl" textAlign="center" color="teal">
                                Micronutrient Supplementation
                            </Text>
                        </GridItem>
                        <GridItem colSpan={12}>

                            <SimpleGrid columns={12} gap={2}>
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Iron with Folic Acid
                                    </Text>
                                </GridItem>
                                {/* 1st month postpartum */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="md" align="center">1st month postpartum</Text>
                                    <FormLabel>No. of Tablets</FormLabel>
                                    <Input type="number" />
                                    <FormLabel>Date Given</FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                {/* 2nd month postpartum */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="md" align="center">2nd month postpartum</Text>
                                    <FormLabel>No. of Tablets</FormLabel>
                                    <Input type="number" />
                                    <FormLabel>Date Given</FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                {/* 3rd month postpartum */}
                                <GridItem colSpan={4}>
                                    <Text fontSize="md" align="center">3rd month postpartum</Text>
                                    <FormLabel>No. of Tablets</FormLabel>
                                    <Input type="number" />
                                    <FormLabel>Date Given</FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                <GridItem colSpan={12}>
                                    <Text fontSize="xl">
                                        Vitamin A
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={6}>

                                    <FormLabel>
                                        Date Given
                                    </FormLabel>
                                    <Input type="date" />
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <FormLabel>
                                        Remarks
                                    </FormLabel>
                                    <Input type="type" />
                                </GridItem>
                            </SimpleGrid>
                        </GridItem>
                        {/* Submit */}
                        <GridItem colSpan={12}>
                            <Button colorScheme="green" w='full'>
                                Submit
                            </Button>
                        </GridItem>
                    </SimpleGrid>
                </FormControl>
            </VStack>
        </Box>
    )
}
