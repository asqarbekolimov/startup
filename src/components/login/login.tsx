import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginProps } from "./login.props";

const Login = ({ onNavigateStateComponent }: LoginProps) => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Login
        <Text
          as={"span"}
          bgGradient="linear(to-r, gray.400,facebook.400)"
          bgClip="text"
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        We're happy to see you again on our platfrom, for getting more
        exprienced please sign in on your account!
      </Text>
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="facebook.500"
          type="text"
          placeholder="example@mail.com"
          h={14}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            focusBorderColor="facebook.500"
            type={!show ? "password" : "text"}
            placeholder="******"
            h={14}
          />
          <InputRightElement pt={4}>
            <Icon
              as={!show ? AiOutlineEyeInvisible : AiOutlineEye}
              cursor={"pointer"}
              onClick={toggleShow}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <HStack justify={"space-between"}>
        <Checkbox colorScheme="facebook">Remember me</Checkbox>
        <Link href={"/account-recovery"}>
          <Box
            as="a"
            color={"teal.500"}
            _hover={{ textDecoration: "underline" }}
          >
            Forgot password
          </Box>
        </Link>
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
        Submit
      </Button>
      <Text>
        Not account yet?{" "}
        <Box
          as="span"
          color={"teal.500"}
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
          onClick={() => onNavigateStateComponent("register")}
        >
          Register
        </Box>
      </Text>
    </Stack>
  );
};

export default Login;
