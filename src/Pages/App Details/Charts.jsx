import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ratings}) => {
    return (
            <div className="h-80 mx-auto">
            <h1 className="text-2xl font-semibold text-[#001931] mb-3">Ratings</h1>
            <ResponsiveContainer >
              <BarChart
              layout="vertical"
              barSize={35}
            data={[...ratings].reverse()}>

                <XAxis 
                type="count" 
                axisLine={false} 
                tickLine={false} 
                padding={{ left: 20 }}
                />
                <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false}
                padding={{ bottom: 15 }}    
                />
                <Bar dataKey="count" 
                fill="#FF8811" />
              </BarChart>
            </ResponsiveContainer>
          </div>
    );
};

export default Charts;