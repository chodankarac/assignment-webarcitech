import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { useAppSelector } from "../../redux/hooks";
import "./CategoryDistributionChart.css";

const CategoryDistributionChart = () => {
  const data = useAppSelector((state) => state.aiData.categoryData);
  return (
    <div className="ChartContainer">
      <h1 className="ChartTitle">Category Distribution</h1>
      <BarChart
        width={450}
        height={300}
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
    </div>
  );
};

export default CategoryDistributionChart;
