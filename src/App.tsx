import { useEffect } from "react";
import "./App.css";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import { response } from "./aiDataResponse/index";
import { setCategoryData } from "./redux/features/aiDataSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  // const [categoryData, setCategoryData] = useState<{ category: string; queries: number }[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const categoryData = Object.entries(response.category_distribution).map(([category, queries]) => ({
        category,
        queries,
      }));
      dispatch(setCategoryData(categoryData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  return (
    <div className="App">
      <CategoryDistributionChart />
    </div>
  );
}

export default App;
