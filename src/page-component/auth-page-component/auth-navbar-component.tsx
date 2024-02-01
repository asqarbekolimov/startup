import { language, navigation } from "@/config/constants";
import { DarkLogo, LightLogo } from "@/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const AuthNavbarComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const linkHover = useColorModeValue("black", "white");

  const onLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.replace(router.asPath);
  };

  return (
    <Box w={"full"} h={"10vh"}>
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
            <Menu placement="bottom">
            <MenuButton
              as={Button}
              rightIcon={<TbWorld />}
              colorScheme={"facebook"}
              variant={"ghost"}
              textTransform={"capitalize"}
            >
              {i18n.resolvedLanguage}
            </MenuButton>
            <MenuList p={0}>
              {language.map((item) => (
                <MenuItem
                  key={item.lng}
                  onClick={() => onLanguage(item.lng)}
                  icon={<item.icon />}
                  backgroundColor={
                    i18n.resolvedLanguage === item.lng ? "facebook.500" : ""
                  }
                  >
                  {item.nativeLng}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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
