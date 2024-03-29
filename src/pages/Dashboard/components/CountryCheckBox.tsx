import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface CountryCheckBoxProps {
  options: string[];
  setCheckedOptionsChart: React.Dispatch<React.SetStateAction<string[]>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  initialChartHeight: number;
}

export const CountryCheckBox = ({ options, setCheckedOptionsChart, setHeight, initialChartHeight }: CountryCheckBoxProps) => {
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);
  const [isHoveredConfirm, setHoveredConfirm] = useState<boolean>(false);
  const [isHoveredReset, setHoveredReset] = useState<boolean>(false);

  const { t } = useTranslation();
  const boxHeader = t("dashboardPage.boxHeader");
  const addText = t("dashboardPage.addButton");
  const resetText = t("dashboardPage.reset")

  // Options are sorted according to their English/Danish names from JSON
  const sortedOptions = options.sort((a, b) => {
    const transA = t(`countries.${a}.fullName`);
    const transB = t(`countries.${b}.fullName`);

    return transA.localeCompare(transB);
  })

  // Some limit to signal when the chart should increase
  const optionslimit = 8;

  // How much the chart grows for every added country
  const chartGrowth = 50;

  // State hook for counrting the number of selected countries in the box
  const [numberOfCheckedOptions, setNumberOfCheckedOptions] = useState<number>(0);

  // This function renders options as checked or unchecked
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const opt = event.target.value;

    // Add the newly checked option, or remove an unchecked option
    if (event.target.checked) {
      setCheckedOptions([...checkedOptions, opt]);
      setNumberOfCheckedOptions(numberOfCheckedOptions + 1)
    } else {
      setCheckedOptions(checkedOptions.filter((o) => o !== opt));
      setNumberOfCheckedOptions(numberOfCheckedOptions - 1)
    }
  };

  // This function sets the list of countries that the chart should render,
  // and computes a new height for the chart if necessary
  const handleSubmitClick = () => {
    setCheckedOptionsChart(checkedOptions);

    // Increase height if we are over the addition limit
    if (numberOfCheckedOptions > optionslimit) {
      const limitDiff = Math.abs(numberOfCheckedOptions - optionslimit);

      setHeight(initialChartHeight + (chartGrowth * limitDiff));
    } else {
      setHeight(initialChartHeight);
    }
  }

  // Reset checkbox
  const handleResetClick = () => {
    setCheckedOptions([]);

    setCheckedOptionsChart([]);

    setHeight(initialChartHeight);

    setNumberOfCheckedOptions(0);
  }

  // Set to true when we have hovering over the confirm button
  const handleMouseHoverConfirm = () => { setHoveredConfirm(true); };

  // Set to false when we are no longer hovering over the confirm button
  const handleMouseStaticConfirm = () => { setHoveredConfirm(false); };

  // Set to true when we have hovering over the reset button
  const handleMouseHoverReset = () => { setHoveredReset(true); };

  // Set to false when we are no longer hovering over the reset button
  const handleMouseStaticReset = () => { setHoveredReset(false); };

  return (
    <div style={{
      marginLeft: "15px",
      marginRight: "15px",
      borderRadius: "8px",
    }}>
      <div style={{
        fontWeight: "bold",
        marginBottom: "5px",
        fontSize: "18px",
      }}>
        {boxHeader}
      </div>
      <div style={{
        border: "1px solid grey",
        borderRadius: "4px",
        height: "570px",
        overflowY: "scroll",
      }}>
        {sortedOptions.map((o) => (
          <div data-testid="checkbox" role="mycheckboxes" key={o} style={{ fontSize: "15px" }}>
            <label>
              <input
                type="checkbox"
                value={o}
                checked={checkedOptions.includes(o)}
                onChange={handleCheckboxChange}>
              </input>
              <span>{t(`countries.${o}.fullName`)}</span>
            </label>
          </div>
        ))}
      </div>

      <button onClick={handleResetClick} style={{
        cursor: "pointer",
        marginTop: "10px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        width: "100%",
        backgroundColor: isHoveredReset ? "#BBB9D2" : "#6f6ad1",
        transition: "background-color 0.05s",
        border: "none",
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
      }}
      onMouseEnter={handleMouseHoverReset}
      onMouseLeave={handleMouseStaticReset}
      >
        {resetText}
      </button>

      <input type="submit" value={addText} onClick={handleSubmitClick} style={{
        width: "100%",
        height: "40px",
        marginTop: "15px",
        borderRadius: "8px",
        border: "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        backgroundColor: isHoveredConfirm ? "#BBB9D2" : "#6f6ad1",
        transition: "background-color 0.05s",
        cursor: "pointer",
        fontWeight: "bold",
        color: "white",
      }}
      onMouseEnter={handleMouseHoverConfirm}
      onMouseLeave={handleMouseStaticConfirm}
      >
      </input>
    </div>
  );
}
