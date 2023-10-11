import {
  Categories,
  Hero,
  HowItWorks,
  Instructors,
  Newsletter,
  PopularCources,
  Sponsorship,
  Testimonials,
} from "@/components";
import { Stack } from "@chakra-ui/react";
import React from "react";

const HomePageComponents = () => {
  return (
    <Stack spacing={"10"}>
      <Hero />
      <Categories />
      <PopularCources />
      <HowItWorks />
      <Instructors />
      <Testimonials />
      <Newsletter />
      <Sponsorship />
    </Stack>
  );
};

export default HomePageComponents;
