import {
  Area,
  AreaChart,
  CartesianGrid,
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
  filter: "sex" | "lgbtq";
  w: number
  h: number
}

export const SummaryChart = ({ data, filter, w, h }: SummaryChartProps) => {
  const { t } = useTranslation();

  return (
    <AreaChart
      width={w}
      height={h}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
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
        dataKey={filter === "sex" ? "male" : ""}
        stackId="1"
        stroke="#24b75f"
        fill="url(#colorMale)"
      />
      <Area
        type="monotone"
        dataKey={filter === "sex" ? "female" : "lgbtq"}
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
      <YAxis axisLine={false} tickLine={false} tickCount={8} />
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
