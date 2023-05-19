import { StyledDiv } from "src/components/common/StyledDiv";
import { StyledText } from "src/components/common/StyledText";
import { noResult } from "src/images";

export const NoResultView = () => (
  <StyledDiv justifyContent="center" width="350px">
    <StyledDiv height="250px" width="250px" margin="auto">
      <img src={noResult} height="250px" />
    </StyledDiv>
    <div style={{ textAlign: "center", marginBottom: "12px" }}>
      <StyledText variant="paragraphMediumBold" mb="20px">
        Result Not Found
      </StyledText>
    </div>
    <div style={{ textAlign: "center" }}>
      <StyledText variant="paragraphSmall" color="darkGrey">
        Unfortunately no cases match your search. Please try again with
        different search values.
      </StyledText>
    </div>
  </StyledDiv>
);