import React from "react";
import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";
import { sponsorshipCarousel } from "@/config/carousel";
import { trustedCompeny } from "@/config/constants";
import { Icon } from "@chakra-ui/react";

const Sponsorship = () => {
  return (
    <>
      <SectionTitle
        title=""
        subtitle="Trusted by the world's best"
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
