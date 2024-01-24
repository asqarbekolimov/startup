import {
  Button,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Verify = () => {
  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Verification
        <Text
          as={"span"}
          bgGradient="linear(to-r, gray.400,facebook.400)"
          bgClip="text"
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        The last step and it almost done, just check your email we sent to your
        email otp verification code with 6 digits number.
      </Text>
      <HStack justify={"center"}>
        <PinInput
          otp
          size={"lg"}
          colorScheme="facebook"
          focusBorderColor="facebook.500"
        >
          {new Array(6).fill(1).map((_, idx) => (
            <PinInputField key={idx} />
          ))}
        </PinInput>
      </HStack>
      <Button
        w={"full"}
        bgGradient={"linear(to-r, facebook.400,gray.400)"}
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, facebook.500,gray.500)",
          boxShadow: "xl",
        }}
        h={14}
      >
        Confirm
      </Button>
    </Stack>
  );
};

export default Verify;
