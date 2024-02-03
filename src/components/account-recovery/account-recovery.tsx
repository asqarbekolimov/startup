import React, { useState } from "react";
import { AccountRecoveryProps } from "./account-recovery.props";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  PinInput,
  PinInputField,
  Progress,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import useShowPassword from "@/hooks/useShowPassword";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AccountRecovery = ({
  onNavigateStateComponent,
}: AccountRecoveryProps) => {
  const [progress, setProgress] = useState<33.33 | 66.66 | 100>(33.33);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const { show, toggleShow, showConfirm, toggleShowConfirm } =
    useShowPassword();
  const toast = useToast();

  const onForm1Submit = () => {
    setStep(2);
    setProgress(66.66);
  };
  const onForm2Submit = () => {
    setStep(3);
    setProgress(100);
  };
  const onForm3Submit = () => {
    onNavigateStateComponent("login");
    toast({
      title: "Successfully edited",
      description: "You can login to account with new password",
      status: "success",
      position: "top-right",
      isClosable: true,
    });
  };

  const form1 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {" "}
        Account Recovery
        <Text
          as={"span"}
          bgGradient={"linear(to-r, gray.400, facebook.400)"}
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text>
        Your forgot password from your account. Don't worry about it. Sammi team
        can help you solve that problem. Just follow steps below.
      </Text>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          focusBorderColor="facebook.500"
          type="text"
          placeholder="info@mail.com"
          h={14}
        />
      </FormControl>
      <Button
        w={"full"}
        bgGradient={"linear(to-r, facebook.400,gray.400)"}
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, facebook.500,gray.500)",
          boxShadow: "xl",
        }}
        h={14}
        onClick={onForm1Submit}
      >
        Send OTP
      </Button>
    </>
  );
  const form2 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {" "}
        Verify Email
        <Text
          as={"span"}
          bgGradient={"linear(to-r, gray.400, facebook.400)"}
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text>
        We sent to your email otp verification code with 6 digits number.
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
        onClick={onForm2Submit}
      >
        Verify
      </Button>
    </>
  );
  const form3 = (
    <>
      <Heading
        color={useColorModeValue("gray.900", "gray.200")}
        lineHeight={1.1}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        {" "}
        New Password
        <Text
          as={"span"}
          bgGradient={"linear(to-r, gray.400, facebook.400)"}
          bgClip={"text"}
        >
          !
        </Text>
      </Heading>
      <Text>Last step to return and anjoy our courses and services.</Text>
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
      <Button
        w={"full"}
        bgGradient={"linear(to-r, facebook.400,gray.400)"}
        color={"white"}
        _hover={{
          bgGradient: "linear(to-r, facebook.500,gray.500)",
          boxShadow: "xl",
        }}
        h={14}
        onClick={onForm3Submit}
      >
        Submit
      </Button>
    </>
  );

  return (
    <>
      <Progress value={progress} colorScheme="facebook" hasStripe isAnimated />
      <Stack spacing={4}>
        {step === 1 && form1}
        {step === 2 && form2}
        {step === 3 && form3}
      </Stack>
    </>
  );
};

export default AccountRecovery;
