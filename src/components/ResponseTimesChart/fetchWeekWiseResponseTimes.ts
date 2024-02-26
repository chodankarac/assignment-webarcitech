import axios from "axios";

const fetchWeekWiseResponseTimes = async () => {
  const response = await axios.get("/ai-data.json");
  const weekWiseData = response.data.response_times.week_wise;
  const weekWiseResponseTimes = weekWiseData.map((weekData: { week: string; average_time: string }) => ({
    week: weekData.week,
    average_time: weekData.average_time,
  }));
  return weekWiseResponseTimes;
};

export default fetchWeekWiseResponseTimes;
