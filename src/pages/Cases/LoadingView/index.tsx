// ScaleLoader and SyncLoader also nice

import BeatLoader from "react-spinners/BeatLoader";
import { StyledDiv } from "src/components/common/StyledDiv";
import { StyledText } from "src/components/common/StyledText";
import { useTranslation } from "react-i18next";

interface LoadingViewProps {
  timeoutPassed: boolean;
}

export const LoadingView = ({ timeoutPassed }: LoadingViewProps) => {
  const { t } = useTranslation();

  const timeout = t("filterPage.timeout");

  return (
    <StyledDiv
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <BeatLoader size={10} speedMultiplier={0.4} />
      {timeoutPassed && (
        <StyledText variant="labelSmall" mt="20px">
          {timeout}
        </StyledText>
      )}
    </StyledDiv>
  );
};
