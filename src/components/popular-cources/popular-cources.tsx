import React from "react";
import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";

import { courseCarousel } from "@/config/carousel";
import { useTranslation } from "react-i18next";
import { courses } from "@/config/constants";
import PopularCoursesCard from "../popular-courses-card/popular-courses-card";

const PopularCources = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title={t("popular_courses_title", { ns: "home" })}
        subtitle={t("popular_courses_description", { ns: "home" })}
      />
      <Carousel
        responsive={courseCarousel}
        arrows={true}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
      >
        {courses.map((item) => (
          <PopularCoursesCard item={item} key={item.title} />
        ))}
      </Carousel>
    </>
  );
};

export default PopularCources;
