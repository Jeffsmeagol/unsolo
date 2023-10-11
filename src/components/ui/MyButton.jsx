import { Button } from "@mui/material";

export default function MyButton({
  children,
  width,
  color,
  variant,
  fontWeight,
  mySubmit,
  myDisabled,
  onClick,
  href,
  py,
  px,
  fontSize,
  bgcolor
}) {
  const myPy = py || 1.5;
  return (
    <Button
      href={href}
      onClick={onClick}
      disabled={myDisabled || false}
      type={mySubmit || "button"}
      variant={variant || "contained"}
      sx={{
        borderRadius: "2rem",
        boxShadow: "none",
        py: myPy,
        px: Number(`${px || 3.5}`),
        fontSize: `${fontSize || "1rem"}`,
        textTransform: "capitalize",
        width,
        color,
        bgcolor,
        fontWeight,
      }}
    >
      {children}
    </Button>
  );
}
