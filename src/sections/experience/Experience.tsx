import experiences from "@/data/experience.json";
import Section from "@/components/section/Section";
import { Box, Text, Title } from "@mantine/core";
import TechIcon from "@/components/tech-icon/TechIcon";
import classes from "./Experience.module.css";

type ExperienceProps = {
  years: string;
  organisation: string;
  title: string;
  description: string;
};

const MobileExperience = ({
  years,
  organisation,
  title,
  description,
}: ExperienceProps) => (
  <Box className={classes.container}>
    <Box className={classes.mobileHeader}>
      <TechIcon technology={organisation} size={70} />

      <Box className={classes.mobileTitle}>
        <Title order={3}>{title}</Title>
        <Text className={classes.years}>{years}</Text>
      </Box>
    </Box>

    <Text className={classes.mobileDescription}>{description}</Text>
  </Box>
);

const DesktopExperience = ({
  years,
  organisation,
  title,
  description,
}: ExperienceProps) => (
  <>
    <Box className={classes.header}>
      <Text className={classes.years}>{years}</Text>

      <Box className={classes.title}>
        <TechIcon technology={organisation} size={50} />
        <Title order={3}>{title}</Title>
      </Box>
    </Box>

    <Box className={classes.body}>
      <Text className={classes.description}>{description}</Text>
    </Box>
  </>
);

export default function Experience() {
  return (
    <Section name="experience" size="xs">
      {experiences.map((experience, index) => (
        <Box key={`experience-${index}`}>
          <Box hiddenFrom="xs">
            <MobileExperience {...experience} />
          </Box>

          <Box visibleFrom="xs">
            <DesktopExperience {...experience} />
          </Box>
        </Box>
      ))}
    </Section>
  );
}
