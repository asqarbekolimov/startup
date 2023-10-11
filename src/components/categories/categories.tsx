import React from "react";
import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";
import { categories } from "@/config/constants";
import { Box, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { categoryCarousel } from "@/config/carousel";

const Categories = () => {
  const bacgroundColor = useColorModeValue("gray.100", "gray.900");
  const fill = useColorModeValue("#020288", "gray.600");

  return (
    <>
      <SectionTitle
        title="Top categories"
        subtitle="Learn our courses with high rating"
      />
      <Carousel
        responsive={categoryCarousel}
        showDots={false}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite
      >
        {categories.map((item) => (
          <Box
            key={item.id}
            minH={"200px"}
            mx={2}
            backgroundColor={bacgroundColor}
            textAlign={"center"}
            p={5}
            borderRadius={"lg"}
            cursor={"pointer"}
          >
            <Icon as={item.icon} w={20} h={20} fill={fill} />
            <Text mt={2} fontSize={"lg"}>
              {item.name}
            </Text>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default Categories;
