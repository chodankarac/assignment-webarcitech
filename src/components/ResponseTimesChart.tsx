import { useAppSelector } from "../redux/hooks";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ResponseTimesChart = () => {
  const dayWiseData = useAppSelector((state) => state.aiData.dayWiseData);
  const weekWiseData = useAppSelector((state) => state.aiData.weekWiseData);
  return (
    <>
      <LineChart width={600} height={400} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" data={dayWiseData} name="Day Wise" stroke="#8884d8" />
      </LineChart>
      <LineChart width={600} height={400} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" data={weekWiseData} name="Week Wise" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};

export default ResponseTimesChart;
