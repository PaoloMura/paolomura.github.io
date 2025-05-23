import { Box, Text, Title } from "@mantine/core";
import TechIcon from "../tech-icon/TechIcon";
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

export default function Experience(props: ExperienceProps) {
  return (
    <>
      <Box hiddenFrom="xs">
        <MobileExperience {...props} />
      </Box>

      <Box visibleFrom="xs">
        <DesktopExperience {...props} />
      </Box>
    </>
  );
}
