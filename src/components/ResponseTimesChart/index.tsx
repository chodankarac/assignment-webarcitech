import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { useAppSelector } from "../../redux/hooks";
import "./ResponseTimesChart.css";

const ResponseTimesChart = () => {
  const dayWiseData = useAppSelector((state) => state.aiData.dayWiseData);
  const weekWiseData = useAppSelector((state) => state.aiData.weekWiseData);
  return (
    <div className="ChartContainers">
      <h1>Response Times</h1>
      <LineChart width={450} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" data={dayWiseData} name="Day Wise" stroke="#8884d8" />
      </LineChart>
      <h2>DayWise ResponseTimes</h2>
      <LineChart width={450} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" data={weekWiseData} name="Week Wise" stroke="#82ca9d" />
      </LineChart>
      <h2>WeekWise ResponseTimes</h2>
    </div>
  );
};

export default ResponseTimesChart;
