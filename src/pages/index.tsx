/* eslint-disable @next/next/no-page-custom-font */
import { useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Page from "../components/page";
import Section from "../components/section";
import About from "../section/Home/about";
import Footer from "../section/Home/footer";
import Header from "../section/Home/header";
import Main from "../section/Home/main";
import Skills from "../section/Home/skills";

const Home: NextPage = function Home() {
  const theme = useTheme();
  return (
    <Page>
      <Head>
        <title>Wildan Najah Wildiansyah</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Header />
        <Main />
      </Section>
      <Section title="About Me" subtitle="My Introduction">
        <About />
      </Section>
      <Section title="Skills" subtitle="My Technical Skills">
        <Skills />
      </Section>
      <Section
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          fontSize: "3rem",
          bottom: 0,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Footer />
      </Section>
    </Page>
  );
};

export default Home;
