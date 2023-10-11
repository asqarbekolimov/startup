import { withLayout } from "@/layouts/layout";
import { HomePageComponents } from "@/page-component";
import React from "react";

const Home = () => {
  return <HomePageComponents />;
};

export default withLayout(Home);
