import React from "react";
import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";
import { sponsorshipCarousel } from "@/config/carousel";
import { trustedCompeny } from "@/config/constants";
import { Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Sponsorship = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle
        title=""
        subtitle={t("sponsor_title", { ns: "home" })}
        textAlign={"center"}
      />
      <Carousel
        responsive={sponsorshipCarousel}
        arrows={false}
        showDots={false}
        infinite
        autoPlay={true}
        autoPlaySpeed={1000}
        draggable={false}
      >
        {trustedCompeny.map((item, idx) => (
          <Icon key={idx} as={item} fontSize={50} />
        ))}
      </Carousel>
    </>
  );
};

export default Sponsorship;
