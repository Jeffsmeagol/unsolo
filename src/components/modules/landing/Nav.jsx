import {
  AppBar,
  Box,
  Fab,
  Fade,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MyButton from "../../ui/MyButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import SignUpDialog from "../signup/SignUpDialog";
import { grey } from "@mui/material/colors";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({ threshold: 500 });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };
  return (
    <Slide direction="up" in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        {children}
      </Box>
    </Slide>
  );
}

export default function Nav() {
  const token = localStorage.getItem("token");
  const [navColor, setNavColor] = useState(true);
  const changeNavColor = () => {
    if (window.scrollY > 600) {
      setNavColor(false);
    } else {
      setNavColor(true);
    }
  };

  window.addEventListener("scroll", changeNavColor);
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            bgcolor: `${navColor ? "#1c1c1c" : "rgba(0, 0, 0, 0.4)"}`,
            backdropFilter: "blur(4px)",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              transition: "0.5s",
              "&:hover": { bgcolor: "#000000" },
            }}
          >
            <Stack direction="row" alignItems="center">
              <Box width="2.7rem" mr={1}>
                <img width="100%" src="/unsolo-icon.svg" alt="unsolo-icon" />
              </Box>
              <Typography color="primary" fontWeight={700}>
                UNSOLO
              </Typography>
            </Stack>
            <Stack direction="row">
              {/* {token ? ( */}
                <Link to="/homepage/dashboard">
                  <MyButton variant="text" fontWeight={700}>
                    dashboard
                  </MyButton>
                </Link>
              
                {/* <SignUpDialog>
                  <MyButton
                    variant="outlined"
                    bgcolor={grey[500]}
                    color={grey[50]}
                  >
                    Sign up
                  </MyButton>
                </SignUpDialog> */}
              

              <MyButton href="/#explore" variant="text" fontWeight={700}>
                Explore
              </MyButton>
              <MyButton href="/#about" variant="text" fontWeight={700}>
                About
              </MyButton>
              <MyButton href="/#contact" variant="text" fontWeight={700}>
                Contact
              </MyButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab
          size="large"
          color="primary"
          sx={{ bgcolor: "rgba(243, 172, 84, 0.1)" }}
        >
          <KeyboardArrowUp fontSize="large" />
        </Fab>
      </ScrollTop>
    </>
  );
}
