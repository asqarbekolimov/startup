import { ArticleType } from "@/interfaces/article.interface";
import { Language } from "@/interfaces/constants.interface";
import { withLayout } from "@/layouts/layout";
import { ArticlePageComponent } from "@/page-component";
import { Articles } from "@/services/article.service";
import { GetServerSideProps } from "next";
import React from "react";

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  console.log(articles);

  return <ArticlePageComponent articles={articles} />;
};

export default withLayout(ArticlesPage);

export const getServerSideProps: GetServerSideProps<
  ArticlesPageProps
> = async ({ req }) => {
  const lng: Language = req.cookies.i18next as Language;
  const articles = await Articles.getArtciles(lng);
  return {
    props: {
      articles,
    },
  };
};

interface ArticlesPageProps extends Record<string, unknown> {
  articles: ArticleType[];
}
