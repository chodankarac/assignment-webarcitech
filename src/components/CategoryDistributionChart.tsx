import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { useAppSelector } from "../redux/hooks";

const CategoryDistributionChart = () => {
  const data = useAppSelector((state) => state.aiData.categoryData);
  return (
    <>
      <BarChart
        width={450}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        barSize={20}
        barGap={1}
      >
        <XAxis dataKey="category" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="queries" fill="#8884d8" />
      </BarChart>
      <h1>Category Distribution Chart</h1>
    </>
  );
};

export default CategoryDistributionChart;
