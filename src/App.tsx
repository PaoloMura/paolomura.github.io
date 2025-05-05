import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import classes from "./App.module.css";
import Header from "./sections/Header";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <div className={classes.content}>
        <Header />
        <Hero />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </MantineProvider>
  );
}
