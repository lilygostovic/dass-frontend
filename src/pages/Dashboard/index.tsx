import { Footer, Nav } from "../../components";
import React, { useState } from "react";

import { FilterButton } from "../../components/Button";
import { SummaryChart } from "./components";
import { data } from "./data";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const [filter, setFilter] = useState<"sex" | "lgbtq">("sex");
  const { t } = useTranslation();

  const text = t(`dashBoard.welcome`);

  const viewSex = () => {
    setFilter("sex");
  };
  const viewLGBTQ = () => {
    setFilter("lgbtq");
  };

  return (
    <div
      style={{
        backgroundColor: "#ECF2FF",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "50px",
            color: "black",
          }}
        >
          <FilterButton
            onClick={viewSex}
            isSelected={filter === "sex"}
            text={t(`dashBoard.sex`)}
          />
          <FilterButton
            onClick={viewLGBTQ}
            isSelected={filter === "lgbtq"}
            text={t(`dashBoard.lgbtq`)}
          />
        </div>
        <div
          style={{
            height: "87vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "black", marginBottom: "20px" }}>{text}</div>
          <SummaryChart data={data} filter={filter} w={900} h={600} />
        </div>
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};
