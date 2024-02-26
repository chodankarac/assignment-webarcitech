import axios from "axios";

const fetchDayWiseResponseTimes = async () => {
  const response = await axios.get("/ai-data.json");
  const dayWiseData = response.data.response_times.day_wise;
  const dayWiseResponseTimes = dayWiseData.map((dayData: { date: string; average_time: string }) => ({
    date: dayData.date,
    average_time: dayData.average_time,
  }));
  return dayWiseResponseTimes;
};

export default fetchDayWiseResponseTimes;
