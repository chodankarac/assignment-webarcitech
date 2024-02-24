import aiData from "../../aiDataResponse/ai-data.json";

const fetchDayWiseResponseTimes = () => {
  const dayWiseData = aiData.response_times.day_wise;
  const dayWiseResponseTimes = dayWiseData.map((dayData) => ({
    date: dayData.date,
    average_time: dayData.average_time,
  }));
  return dayWiseResponseTimes;
};

export default fetchDayWiseResponseTimes;
