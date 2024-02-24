import aiData from "../../aiDataResponse/ai-data.json";

const fetchCategoryDataResponse = () => {
  const categoryData = Object.entries(aiData.category_distribution).map(([category, queries]) => ({
    category,
    queries,
  }));
  return categoryData;
};

export default fetchCategoryDataResponse;
