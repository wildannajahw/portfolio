import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import typography from "../../theme/typography";
import useResponsive from "../../hooks/useResponsive";
import { MainContainer } from "./main";

export default function About() {
  const smUp = useResponsive("up", "sm");
  return (
    <Box>
      <MainContainer>
        <Box
          gridTemplateColumns={smUp ? "1fr 1fr" : "1fr"}
          // paddingTop="3.5rem"
          // alignItems="center"
          display="grid"
          gap="2rem"
        >
          <Box
            sx={{
              // display: "grid",
              // gap: "1.5rem",
              // maxWidth: "768px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              margin: "0 1.5rem",
            }}
          >
            <Image
              src="/img/about.jpg"
              alt="me"
              width={smUp ? "350" : "200"}
              height={smUp ? "350" : "200"}
              style={{
                borderRadius: ".5rem",
              }}
            />
          </Box>
          <Stack spacing={3}>
            <Typography
              sx={{
                color: "text.secondary",
                ...typography.subtitle2,
                // margin: "0 3rem 2rem 3rem",
              }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              Web develover, with extensive knowloedge and years of experience,
              working in web technologies and UI/UX design, delivering quality
              work.
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
              justifyContent={{ xs: "center", sm: "left" }}
            >
              <a href="pdf/Wildan-CV.pdf" download>
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  sx={{
                    padding: "1rem",
                    // alignItems: "center",
                    // display: "flex",
                    // justifyContent: "center",
                  }}
                >
                  Download CV{" "}
                  <UilDownloadAlt
                    style={{
                      marginLeft: ".5rem",
                    }}
                  />
                </Button>
              </a>
            </Box>
          </Stack>
        </Box>
      </MainContainer>
    </Box>
  );
}
