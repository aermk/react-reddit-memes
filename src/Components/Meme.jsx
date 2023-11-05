import { Card, styled } from "@mui/material";

const StyledCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "8px",
  border: "1px solid darkGray",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
});

const Meme = ({ meme }) => {
  return (
    <StyledCard>
      <img
        src={meme.data.url}
        alt="meme"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </StyledCard>
  );
};

export default Meme;
