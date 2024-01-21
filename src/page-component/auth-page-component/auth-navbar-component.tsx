import { navigation } from "@/config/constants";
import { DarkLogo, LightLogo } from "@/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const AuthNavbarComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  const linkHover = useColorModeValue("black", "white");

  return (
    <Box
      w={"full"}
      h={"10vh"}
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={999}
    >
      <Container maxW={"container.lg"}>
        <Flex align={"center"} justify={"space-between"} height={"10vh"}>
          <Link href={"/"}>
            {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
          </Link>
          <HStack gap={5}>
            {navigation[1].links.map((nav) => (
              <Link href={nav.route}>
                <Box
                  color={"facebook.300"}
                  _hover={{ textDecoration: "underline", color: linkHover }}
                  as="a"
                >
                  {t(nav.label, { ns: "layout" })}
                </Box>
              </Link>
            ))}
            <IconButton
              aria-label="color-mode"
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? <BsFillMoonFill /> : <BsFillSunFill />
              }
              colorScheme={"facebook"}
              variant={"outline"}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AuthNavbarComponent;
