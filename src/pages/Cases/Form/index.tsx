import {
  AgeInput,
  Container,
  FormInput,
  FormRow,
  Label,
  Select,
  Submit,
  Title,
} from "./StyledComponents";
import {
  type FieldValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";

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

  const motiveLabel = t("filterPage.motive.label");

  const countryLabel = t("filterPage.country.label");
  const afghanistanOption = t("filterPage.country.afghanistan");
  const iranOption = t("filterPage.country.iran");
  const syriaOption = t("filterPage.country.syria");

  const sexLabel = t("filterPage.sex.label");
  const femaleOption = t("filterPage.sex.female");
  const maleOption = t("filterPage.sex.male");
  const indeterminableOption = t("filterPage.sex.indeterminable");

  const ageLabel = t("filterPage.ageFilter.label");
  const minAgePlaceholder = t("filterPage.ageFilter.minPlaceholder");
  const maxAgePlaceholder = t("filterPage.ageFilter.maxPlaceholder");

  return (
    <Container>
      <Title>{formTitle}</Title>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormRow>
          <FormInput>
            <Label>{acceptedLabel}</Label>
            <Select {...register("accepted")}>
              <option value={allOption}>{allOption}</option>
              <option value={acceptedOption}>{acceptedOption}</option>
              <option value={rejectedOption}>{rejectedOption}</option>
            </Select>
          </FormInput>
          <FormInput>
            <Label>{motiveLabel}</Label>
            <Select {...register("motive")} placeholder="Motive">
              <option value={allOption}>{allOption}</option>
            </Select>
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput>
            <Label>{countryLabel}</Label>
            <Select {...register("country")}>
              <option value={allOption}>{allOption}</option>
              <option value={afghanistanOption}>{afghanistanOption}</option>
              <option value={iranOption}>{iranOption}</option>
              <option value={syriaOption}>{syriaOption}</option>
            </Select>
          </FormInput>
          <FormInput>
            <Label>{sexLabel}</Label>
            <Select {...register("sex")} placeholder="Sex">
              <option value={allOption}>{allOption}</option>
              <option value={femaleOption}>{femaleOption}</option>
              <option value={maleOption}>{maleOption}</option>
              <option value={indeterminableOption}>
                {indeterminableOption}
              </option>
            </Select>
          </FormInput>
        </FormRow>
        <FormInput>
          <Label>{ageLabel}</Label>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <AgeInput
              {...register("minAge", { min: 0, max: 99 })}
              type="number"
              placeholder={minAgePlaceholder}
            />
            <AgeInput
              {...register("maxAge", { min: 0, max: 99 })}
              type="number"
              placeholder={maxAgePlaceholder}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </FormInput>
        <Submit type="submit" />
      </form>
    </Container>
  );
};