import { Box, Stack, Typography } from "@mui/material";

export default function Header({ title, subtitle, children }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      // borderBottom="1px solid #EAECF0"
      pb={2}
    >
      <Box>
        <Typography variant="h6" fontWeight={600} pb={1}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {subtitle}
        </Typography>
      </Box>
      {children}
    </Stack>
  );
}
