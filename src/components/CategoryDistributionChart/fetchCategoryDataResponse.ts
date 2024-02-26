import axios from "axios";

type CategoryData = {
  category: string;
  queries: number;
};

type CategoryDataResponse = {
  category_distribution: Record<string, number>;
};

const fetchCategoryDataResponse = async (): Promise<CategoryData[]> => {
  const response = await axios.get<CategoryDataResponse>("/ai-data.json");
  const categoryData = Object.entries(response.data.category_distribution).map(([category, queries]) => ({
    category,
    queries,
  }));
  return categoryData;
};

export default fetchCategoryDataResponse;
