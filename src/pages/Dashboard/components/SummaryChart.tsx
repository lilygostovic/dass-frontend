import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// test merge to master
import React from "react";
import i18n from "../../../i18n/config";
import { useTranslation } from "react-i18next";

interface Country {
  country: string;
  total: number;
  female: number;
  male: number;
  lgbtq: number;
}

interface SummaryChartProps {
  data: Country[];
  filter: "sex" | "lgbtq" | "result";
  w: number
  h: number
  isSummaryPage: boolean
  axisOption?: string
}

export const SummaryChart = ({ data, filter, w, h, isSummaryPage, axisOption }: SummaryChartProps) => {
  const { t } = useTranslation();

  let leftMargin = 0;

  // The y-axis label needs more space to be displayed if we are on summary
  if (isSummaryPage) { leftMargin = 38 };

  // NOTE: this is just a test to see if changing the drop down to a different value actually affects the chart
  if (axisOption === "gender") { w = 500; h = 200 }

  let key1 = "";
  let key2 = "";

  if (filter === "sex") { key1 = "male"; key2 = "female" }
  if (filter === "lgbtq") { key1 = ""; key2 = "lgbtq" }
  if (filter === "result") { key1 = "accepted"; key2 = "rejected" }

  return (
    <AreaChart
      width={w}
      height={h}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: leftMargin,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorTotal" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#2451B7" stopOpacity={0.4} />
          <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="colorFemale" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#b72424" stopOpacity={0.4} />
          <stop offset="75%" stopColor="#b72424" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="colorMale" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#24b75f" stopOpacity={0.4} />
          <stop offset="75%" stopColor="#24b75f" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey={key1}
        stackId="1"
        stroke="#24b75f"
        fill="url(#colorMale)"
      />
      <Area
        type="monotone"
        dataKey={key2}
        stackId="1"
        stroke="#b72424"
        fill="url(#colorFemale)"
      />
      <Area
        type="monotone"
        dataKey="total"
        stackId="1"
        stroke="#2451B7"
        fill="url(#colorTotal)"
      />

      <CartesianGrid strokeDasharray="2 3" opacity={0.1} vertical={false} />
      <XAxis
        dataKey="country"
        axisLine={false}
        tickLine={false}
        tickFormatter={(country: string) =>
          t(`countries.${country}.shortName`).toUpperCase()
        }
      />
      <YAxis axisLine={false} tickLine={false} tickCount={8} >
      {isSummaryPage && (
        <Label
          value="Number of Cases"
          angle={-90}
          position="insideLeft"
          offset={-30}
          style={{ fontWeight: "bold", fontSize: "19px", fill: "black" }}
        />
      )}
      </YAxis>
      <Tooltip />
      <Legend
        verticalAlign="top"
        formatter={(value, entry, index) =>
          i18n.language === "english" ? value : t(value)
        }
      />
    </AreaChart>
  );
};
