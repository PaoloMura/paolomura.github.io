import "@mantine/core/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Hero from "./sections/hero/Hero";
import Footer from "./sections/footer/Footer";
import classes from "./App.module.css";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Experience from "./sections/experience/Experience";
import { NavigationProvider } from "./providers/Navigation";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <NavigationProvider>
        <Box className={classes.content}>
          <Header />
          <Hero />
          <Projects />
          <Experience />
          <Skills />
        </Box>

        <Box className={classes.footer}>
          <Footer />
        </Box>
      </NavigationProvider>
    </MantineProvider>
  );
}
