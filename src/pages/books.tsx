import { withLayout } from "@/layouts/layout";
import { BooksPageComponent } from "@/page-component";
import React from "react";

const Books = () => {
  return <BooksPageComponent />;
};

export default withLayout(Books);
