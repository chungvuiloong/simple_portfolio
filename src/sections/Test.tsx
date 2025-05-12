import React, { useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(import.meta.env.ASTRO_HYGRAPH_ENDPOINT);
const GetPortfolioByCategory = gql`
  query Portfolios($category: String!) {
    portfolios(where: { category: $category }) {
      title
    }
  }
`;

type PortfolioItem = {
  title: string;
};

type Props = {
  portfolios: PortfolioItem[];
};

export async function GET_PortfolioByCategory(category: string) {
  const { portfolios }: { portfolios: PortfolioItem[] } = await client.request(
    GetPortfolioByCategory,
    { category }
  );
  return portfolios;
}

const Test: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("components");
  const [portfolios, setPortfolios] = React.useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GET_PortfolioByCategory(activeCategory);
        console.log("Fetched data:", data);
        setPortfolios(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };

    fetchData();
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <div>{activeCategory}</div>
      <button onClick={() => handleCategoryChange("web")}>Web</button>
      <button onClick={() => handleCategoryChange("components")}>Compo</button>
      <button onClick={() => handleCategoryChange("personal")}>Personal</button>
      {portfolios.length > 0 ? (
        <ul>
          {portfolios.map((portfolio, index) => (
            <li key={index}>{portfolio.title}</li>
          ))}
        </ul>
      ) : (
        <p>No portfolios found for this category.</p>
      )}
    </div>
  );
};

export default Test;
