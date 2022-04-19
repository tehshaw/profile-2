import React, { useState } from "react";
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
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";

export default function ContactForm({ isOpen, onClose }) {

  const bg = useColorModeValue('gray.400', 'purple.800')

  const [waiting, setWaiting] = useState(true);

  

  async function handleOnSubmit(event) {
    event.preventDefault();
    const data = {};
    Array.from(event.target.form).forEach((field) => {
      if (!field.name) return;
      data[field.name] = field.value;
    });

    setWaiting(false);

    fetch("/api/email", {
      method: "post",
      body: JSON.stringify(data),
    });

  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent  bg={bg}>
        <ModalHeader>Send a message to Mike!</ModalHeader>
        <ModalCloseButton />

        {waiting ? (
          <ModalBody >
            <form method="post" onSubmit={handleOnSubmit}>
              <FormControl isRequired isInvalid={false}>
                <FormLabel>First Name:</FormLabel>
                <Input
                  name="firstName"
                  width="auto"
                  placeholder="First Name"
                  mb={4}
                  bg={'white'}
                  color={'black'}
                />
              </FormControl>

              <FormControl isRequired isInvalid={false}>
                <FormLabel>Last Name:</FormLabel>
                <Input
                  name="lastName"
                  width="auto"
                  placeholder="Last Name"
                  mb={4}
                  bg={'white'}
                  color={'black'}
                />
              </FormControl>

              <FormControl isRequired isInvalid={false}>
                <FormLabel>Email:</FormLabel>
                <Input name="email" placeholder="Email" bg={'white'} color={'black'} />
                <FormHelperText mb={4}>
                  {"I won't share your email, I promise!"}
                </FormHelperText>
              </FormControl>

              <FormControl isRequired isInvalid={false}>
                <FormLabel>What is the word?</FormLabel>
                <Textarea
                  name="message"
                  mb={4}
                  bg={'white'} color={'black'}
                />
              </FormControl>

              <ModalFooter>
                <Button variant="solid" colorScheme={'linkedin'} mr={3} onClick={handleOnSubmit}>
                  Send to Mike
                </Button>
                <Button variant="outline" colorScheme={'linkedin'} onClick={onClose}>
                  Maybe Later
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        ) : (
          <ModalBody>
            Your message has been sent. Look for confirmation to be sent to the
            email provided! Thank you!
            <ModalFooter>
              <Button colorScheme="blue" p={2} onClick={onClose}>
                Awesome!
              </Button>
            </ModalFooter>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
