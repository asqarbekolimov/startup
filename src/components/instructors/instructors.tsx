import React from "react";
import SectionTitle from "../section-title/section-title";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlinePayCircle, AiOutlinePlayCircle } from "react-icons/ai";
import Link from "next/link";

const Instructors = () => {
  return (
    <>
      <SectionTitle
        title="Learn from the best instructors"
        subtitle="All our mentor with high exprienced"
      />
      <Grid
        gap={3}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        mt={5}
      >
        {data.map((item, idx) => (
          <GridItem key={idx}>
            <Stack spacing={3}>
              <Image
                src={item.avatar}
                alt={item.firstName}
                borderRadius={"lg"}
                h={"330px"}
                objectFit={"cover"}
              />
              <Heading fontSize={"xl"}>
                {item.firstName} {item.lastName}
              </Heading>
              <Text color={"gray.500"}>{item.job}</Text>
              <HStack opacity={".6"}>
                <Flex align={"center"} gap={1}>
                  <Icon as={FaUserGraduate} />
                  <Text>{item.students} students</Text>
                </Flex>
                <Flex align={"center"} gap={1}>
                  <Icon as={AiOutlinePlayCircle} />
                  <Text>{item.courses} courses</Text>
                </Flex>
              </HStack>
            </Stack>
          </GridItem>
        ))}
      </Grid>

      <Text textAlign={"center"}>
        Want to help people learn, grow and achieve more in life?{" "}
        <Box
          as={"span"}
          color={"teal"}
          _hover={{ textDecoration: "underline" }}
        >
          <Link href={"/become-instructor"}>Become an instructor</Link>
        </Box>
      </Text>
    </>
  );
};

export default Instructors;

const data = [
  {
    firstName: "Phillip",
    lastName: "Harrington",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
  {
    firstName: "Carl",
    lastName: "Bennett",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
  {
    firstName: "Lettie",
    lastName: "Barnett",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
  {
    firstName: "Thomas",
    lastName: "Sims",
    job: "Software Engineer",
    students: 230,
    courses: 20,
    avatar: "https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs",
  },
];
