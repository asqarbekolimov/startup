import { Language } from "./../interfaces/constants.interface";
import { ArticleType } from "@/interfaces/article.interface";
import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
  async getArtciles(lng: Language) {
    const query = gql`
      query Articles($lng: Language) {
        articles(where: { language: $lng }) {
          createdAt
          id
          title
          slug
          excerpt
          language
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ articles: ArticleType[] }>(
      graphqlAPI,
      query,
      { lng }
    );
    return result.articles;
  },

  async getDetailedArtilce(slug: string) {
    const query = gql`
      query DetailedArticle($slug: String!) {
        article(where: { slug: $slug }) {
          createdAt
          id
          title
          slug
          excerpt
          language
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          description {
            raw
          }
        }
      }
    `;

    const result = await request<{ article: ArticleType }>(graphqlAPI, query, {
      slug,
    });
    return result.article;
  },
};
