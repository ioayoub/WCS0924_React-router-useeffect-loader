import { useLoaderData } from "react-router-dom";

export default function ArticlePage() {
  type GenericType = {
    id: number;
    name: string;
    [key: string]: string | number;
  };
  const article: GenericType = useLoaderData() as GenericType;

  return <h1 className="text-4xl text-center my-12">Article {article.name}</h1>;
}
