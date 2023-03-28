import { CaseHighlights, type CaseHighlightsProps } from "./CaseHighlights";

import { CaseBody } from "./CaseBody";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px 80px 40px 80px;

  background-color: #ffffffa2;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export type CaseViewProps = {
  caseNumber: number;
  text: string;
} & CaseHighlightsProps;

export const CaseView = ({ caseNumber, filters, text }: CaseViewProps) => {
  const { t } = useTranslation();
  const title = `${t("filterPage.caseViewTitle")}${caseNumber}`; // todo:: update text

  return (
    <Container>
      <h1>{title}</h1>
      <CaseHighlights filters={filters} />
      <CaseBody text={text} />
    </Container>
  );
};