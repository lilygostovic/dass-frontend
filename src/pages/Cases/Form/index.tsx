import {
  type FieldValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";
import { FormInput, Label, Select, Submit } from "./StyledComponents";

import React from "react";
import { StyledDiv } from "../../../components/common/StyledDiv";
import { StyledText } from "../../../components/common/StyledText";
import { countries } from "../../../common";
import i18n from "../../../i18n/config";
import { motives } from "../../../common/motives";
import { useTranslation } from "react-i18next";

interface FormProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: unknown) => void;
}

export const Form = ({ register, handleSubmit, onSubmit }: FormProps) => {
  const { t } = useTranslation();
  const formTitle = t("filterPage.form.title");
  const allOption = t("filterPage.allOption");

  const acceptedLabel = t("filterPage.accepted.label");
  const acceptedOption = t("filterPage.accepted.accepted");
  const rejectedOption = t("filterPage.accepted.rejected");
  const unknownOption = t("filterPage.accepted.unknown");

  const motiveLabel = t("filterPage.motive.label");

  const countryLabel = t("filterPage.country.label");

  const genderLabel = t("filterPage.gender.label");
  const femaleOption = t("filterPage.gender.female");
  const maleOption = t("filterPage.gender.male");
  const unknownGenderOption = t("filterPage.gender.unknown");

  const submitButton = t("filterPage.submitButton");

  return (
    <StyledDiv
      pt="70px"
      pl="30px"
      pr="30px"
      display="flex"
      flexDirection="column"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    >
      <StyledText variant="headerBig">{formTitle}</StyledText>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <FormInput>
            <Label htmlFor="status-select">{acceptedLabel}</Label>
            <Select id="status-select" {...register("status")}>
              <option value="">{allOption}</option>
              <option value={acceptedOption}>{acceptedOption}</option>
              <option value={rejectedOption}>{rejectedOption}</option>
              <option value={unknownOption}>{unknownOption}</option>
            </Select>
          </FormInput>
          <FormInput>
            <Label htmlFor="motive-select">{motiveLabel}</Label>
            <Select id="motive-select" {...register("motive")} placeholder="Motive">
              <option value="">{allOption}</option>
              {motives.map((motive) => (
                <option key={motive.en} value={motive.dk}>
                  {i18n.language === "en" ? motive.en : motive.dk}
                </option>
              ))}
            </Select>
          </FormInput>
          <FormInput>
            <Label htmlFor="country-select">{countryLabel}</Label>
            <Select id="country-select" {...register("country")}>
              <option value="">{allOption}</option>
              {countries.map((country) => (
                <option key={country.short} value={country.dk}>
                  {i18n.language === "en" ? country.en : country.dk}
                </option>
              ))}
            </Select>
          </FormInput>
          <FormInput>
            <Label htmlFor="gender-select">{genderLabel}</Label>
            <Select {...register("gender")} placeholder="Gender" id="gender-select">
              <option value="">{allOption}</option>
              <option value={femaleOption}>{femaleOption}</option>
              <option value={maleOption}>{maleOption}</option>
              <option value={unknownGenderOption}>{unknownGenderOption}</option>
            </Select>
          </FormInput>
        </div>
        <Submit data-testid ='submit-button' type="submit" value={submitButton} />
      </form>
    </StyledDiv>
  );
};
