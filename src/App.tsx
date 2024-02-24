import { useEffect, useState } from "react";
import "./App.css";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import { response } from "./aiDataResponse/index";

function App() {
  const [categoryData, setCategoryData] = useState<{ category: string; queries: number }[]>([]);

  const fetchData = () => {
    setCategoryData(
      Object.entries(response.category_distribution).map(([category, queries]) => ({ category, queries }))
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CategoryDistributionChart data={categoryData} />
    </div>
  );
}

export default App;
