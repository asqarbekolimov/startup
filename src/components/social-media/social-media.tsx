import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <Box
        pos={"relative"}
        _before={{
          content: '""',
          position: "absolute",
          w: "45%",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "1px",
          bg: "gray.600",
        }}
        _after={{
          content: '""',
          position: "absolute",
          w: "45%",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          height: "1px",
          bg: "gray.600",
        }}
        textAlign={"center"}
      >
        OR
      </Box>
      <HStack>
        <Button w={"full"} colorScheme="gray" leftIcon={<FaGithub />}>
          <Center>Sign in with Github</Center>
        </Button>
        <Button w={"full"} colorScheme="red" leftIcon={<FaGoogle />}>
          <Center>Sign in with Google</Center>
        </Button>
      </HStack>
    </>
  );
};

export default SocialMedia;
