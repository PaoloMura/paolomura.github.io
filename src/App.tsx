import "@mantine/core/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Hero from "./sections/hero/Hero";
import Footer from "./sections/footer/Footer";
import classes from "./App.module.css";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Experiences from "./sections/experiences/Experiences";
import { useInViewport, useScrollIntoView } from "@mantine/hooks";
import { useRef } from "react";

export default function App() {
  const headerRef = useRef<HTMLDivElement>(null);

  const { ref: heroRef, inViewport: heroInViewport } = useInViewport();
  const { ref: projectsRef, inViewport: projectsInViewport } = useInViewport();
  const { ref: experiencesRef, inViewport: experiencesInViewport } =
    useInViewport();
  const { ref: skillsRef, inViewport: skillsInViewport } = useInViewport();

  const { scrollIntoView: scrollHeroIntoView, targetRef: heroTargetRef } =
    useScrollIntoView<HTMLDivElement>();
  const {
    scrollIntoView: scrollProjectsIntoView,
    targetRef: projectsTargetRef,
  } = useScrollIntoView<HTMLDivElement>();
  const {
    scrollIntoView: scrollExperiencesIntoView,
    targetRef: experiencesTargetRef,
  } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollSkillsIntoView, targetRef: skillsTargetRef } =
    useScrollIntoView<HTMLDivElement>();

  const sectionsInViewport: { [key: string]: boolean } = {
    hero: heroInViewport,
    projects: projectsInViewport,
    experiences: experiencesInViewport,
    skills: skillsInViewport,
  };

  const activeSection =
    Object.keys(sectionsInViewport).find(
      (section) => sectionsInViewport[section]
    ) || "hero";

  const handleClickLink = (section: string) => {
    switch (section) {
      case "hero":
        scrollHeroIntoView({ alignment: "start" });
        break;
      case "projects":
        scrollProjectsIntoView({ alignment: "start" });
        break;
      case "experiences":
        scrollExperiencesIntoView({ alignment: "start" });
        break;
      case "skills":
        scrollSkillsIntoView({ alignment: "start" });
        break;
      default:
        break;
    }
  };

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Box className={classes.content}>
        <Box ref={headerRef}>
          <Header activeSection={activeSection} onClickLink={handleClickLink} />
        </Box>

        <Box ref={heroRef} id="hero">
          <Box ref={heroTargetRef}>
            <Hero />
          </Box>
        </Box>

        <Box ref={projectsRef} id="projects">
          <Projects targetRef={projectsTargetRef} />
        </Box>

        <Box ref={experiencesRef} id="experiences">
          <Experiences targetRef={experiencesTargetRef} />
        </Box>

        <Box ref={skillsRef} id="skills">
          <Skills targetRef={skillsTargetRef} />
        </Box>
      </Box>

      <Box className={classes.footer}>
        <Footer />
      </Box>
    </MantineProvider>
  );
}
