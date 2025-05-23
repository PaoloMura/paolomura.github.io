import { Box, Container, Title } from "@mantine/core";
import classes from "./Experiences.module.css";
import experiences from "@/data/experience.json";
import Experience from "@/components/experience/Experience";

export default function Experiences() {
  return (
    <Box className={classes.background}>
      <Container size="xs">
        <Title order={2} pb="xl" pt="xl" ta={{ base: "center", sm: "left" }}>
          Experience
        </Title>

        {experiences.map((experience, index) => (
          <Experience {...experience} key={`experience-${index}`} />
        ))}
      </Container>
    </Box>
  );
}
