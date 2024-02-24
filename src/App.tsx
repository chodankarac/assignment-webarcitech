import { useEffect } from "react";
import "./App.css";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import { setCategoryData, setDayWiseData, setWeekWiseData } from "./redux/features/aiDataSlice";
import { useAppDispatch } from "./redux/hooks";
import fetchCategoryDataResponse from "./redux/features/fetchCategoryDataResponse";
import fetchDayWiseResponseTimes from "./redux/features/fetchDayWiseResponseTimes";
import ResponseTimesChart from "./components/ResponseTimesChart";
import fetchWeekWiseResponseTimes from "./redux/features/fetchWeekWiseResponseTimes";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(setCategoryData(fetchCategoryDataResponse()));
      dispatch(setDayWiseData(fetchDayWiseResponseTimes()));
      dispatch(setWeekWiseData(fetchWeekWiseResponseTimes()));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  return (
    <div className="App">
      <CategoryDistributionChart />
      <ResponseTimesChart />
    </div>
  );
}

export default App;
