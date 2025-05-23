import { Box, Text, Title } from "@mantine/core";
import TechIcon from "../tech-icon/TechIcon";
import classes from "./Experience.module.css";

type ExperienceProps = {
  years: string;
  organisation: string;
  title: string;
  description: string;
};

export default function Experience({
  years,
  organisation,
  title,
  description,
}: ExperienceProps) {
  return (
    <Box className={classes.container}>
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
    </Box>
  );
}
