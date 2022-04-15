import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormControl,
    FormLabel,
    Textarea,
    FormHelperText,
  } from '@chakra-ui/react'

export default function ContactForm({isOpen, onClose}) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Send a message to Mike!</ModalHeader>
      <ModalCloseButton />
 
     
      <ModalBody>
        <FormControl isRequired>
            <FormLabel>First Name:</FormLabel>
            <Input width='auto' placeholder='First Name' mb={4}/>
            <FormLabel>Last Name:</FormLabel>
            <Input width='auto' placeholder='Last Name' mb={4}/>
            <FormLabel>Email:</FormLabel>
            <Input placeholder='Email'/>
            <FormHelperText mb={4}>I won't share your email, I promise!</FormHelperText>
            <FormLabel>What is the word?</FormLabel>
            <Textarea placeholder='Tell me a little about your self...' mb={4}/>



        </FormControl>

      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3}>
          Send to Mike
        </Button>
        <Button variant='ghost' onClick={onClose}>Maybe Later</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>  )
}
