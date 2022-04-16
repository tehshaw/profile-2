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
} from "@chakra-ui/react";

export default function ContactForm({ isOpen, onClose }) {
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
      <ModalContent>
        <ModalHeader>Send a message to Mike!</ModalHeader>
        <ModalCloseButton />

        {waiting ? (
          <ModalBody>
            <form method="post" onSubmit={handleOnSubmit}>
              <FormControl isRequired isInvalid={false}>
                <FormLabel>First Name:</FormLabel>
                <Input
                  name="firstName"
                  width="auto"
                  placeholder="First Name"
                  mb={4}
                />
              </FormControl>

              <FormControl isRequired isInvalid={false}>
                <FormLabel>Last Name:</FormLabel>
                <Input
                  name="lastName"
                  width="auto"
                  placeholder="Last Name"
                  mb={4}
                />
              </FormControl>

              <FormControl isRequired isInvalid={false}>
                <FormLabel>Email:</FormLabel>
                <Input name="email" placeholder="Email" />
                <FormHelperText mb={4}>
                  {"I won't share your email, I promise!"}
                </FormHelperText>
              </FormControl>

              <FormControl isRequired isInvalid={false}>
                <FormLabel>What is the word?</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell me a little about your self..."
                  mb={4}
                />
              </FormControl>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleOnSubmit}>
                  Send to Mike
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Maybe Later
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        ) : (
          <ModalBody>
            Your message has been sent. Look for confirmation to be sent to the
            email provivded! Thank you!
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
