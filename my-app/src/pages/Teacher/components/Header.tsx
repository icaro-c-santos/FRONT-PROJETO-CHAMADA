import { Box, Typography } from "@mui/material";

export const Header = ({ name }: { name: string }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "700",
          textAlign: "center",
          margin: "50px auto",
        }}
      >
        Olá! {name}
      </Typography>
    </Box>
  );
};
