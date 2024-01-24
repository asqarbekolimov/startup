import {
  Box,
  Button,
  Checkbox,
  Flex,
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
import { RegisterProps } from "./register.props";
import useShowPassword from "@/hooks/useShowPassword";

const Register = ({ onNavigateStateComponent }: RegisterProps) => {
  const { show, toggleShow, showConfirm, toggleShowConfirm } =
    useShowPassword();

  return (
    <Stack spacing={4}>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Register
        <Text
          as={"span"}
          bgGradient="linear(to-r, gray.400,facebook.400)"
          bgClip="text"
        >
          !
        </Text>
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
        We're looking for amazing engineers just like you! Become a part of our
        rockstar engineering team and skyrocket your career!
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
      <Flex gap={4}>
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
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              focusBorderColor="facebook.500"
              type={!showConfirm ? "password" : "text"}
              placeholder="******"
              h={14}
            />
            <InputRightElement pt={4}>
              <Icon
                as={!showConfirm ? AiOutlineEyeInvisible : AiOutlineEye}
                cursor={"pointer"}
                onClick={toggleShowConfirm}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
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
        Already have an account?{" "}
        <Box
          as="span"
          color={"teal.500"}
          cursor={"pointer"}
          _hover={{ textDecoration: "underline" }}
          onClick={() => onNavigateStateComponent("login")}
        >
          Login
        </Box>
      </Text>
    </Stack>
  );
};

export default Register;
