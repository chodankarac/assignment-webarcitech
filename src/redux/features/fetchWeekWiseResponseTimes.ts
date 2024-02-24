import aiData from "../../aiDataResponse/ai-data.json";

const fetchWeekWiseResponseTimes = () => {
  const weekWiseData = aiData.response_times.week_wise;
  const weekWiseResponseTimes = weekWiseData.map((weekData) => ({
    week: weekData.week,
    average_time: weekData.average_time,
  }));
  return weekWiseResponseTimes;
};

export default fetchWeekWiseResponseTimes;
