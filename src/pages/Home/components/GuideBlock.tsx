import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";
import casesPic from "./cases.png";
import chartPic from "./caseSum.png";
import sumPic from "./sum.png";
import { useTranslation } from "react-i18next";

interface GuideBlockProps {
  title: string;
  text: string;
}

export const GuideBlock = ({ title, text }: GuideBlockProps) => {
  const { t } = useTranslation();
  const t1 = t("homePage.images.homeChart");
  const t2 = t("homePage.images.summary");
  const t3 = t("homePage.images.cases");

  return (
    <StyledDiv
        display="flex"
        flexDirection="column"
        alignItems="center"
        mx="200px"
        py="40px"
    >
        <StyledText variant="headerBig">{title}</StyledText>
        <StyledText variant="paragraphMedium" textAlign="center">{text}</StyledText>
        <StyledDiv
            display="flex"
            flexDirection="column"
        >
            <StyledDiv margin="10px">
              <figure>
                <img src={chartPic} alt="hjhjh" width="800px" height="500px" style={{ border: "solid black 4px" }}></img>
                <figcaption style={{ fontWeight: "bold", textAlign: "center" }}>{t1}</figcaption>
              </figure>
            </StyledDiv>
            <StyledDiv margin="10px">
              <figure>
                <img src={sumPic} alt="hjhjh" width="800px" height="500px" style={{ border: "solid black 4px" }}></img>
                <figcaption style={{ fontWeight: "bold", textAlign: "center" }}>{t2}</figcaption>
              </figure>
            </StyledDiv>
            <StyledDiv margin="10px">
              <figure>
                <img src={casesPic} alt="hjhjh" width="800px" height="500px" style={{ border: "solid black 4px" }}></img>
                <figcaption style={{ fontWeight: "bold", textAlign: "center" }}>{t3}</figcaption>
              </figure>
            </StyledDiv>
        </StyledDiv>
    </StyledDiv>
  )
};