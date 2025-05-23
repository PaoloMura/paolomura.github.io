import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import skills from "@/data/skills.json";
import classes from "./Skills.module.css";
import { getTechnologyName } from "@/utils/getTechnologyName";
import TechIcon from "@/components/tech-icon/TechIcon";

export default function Skills() {
  return (
    <Container size="lg">
      <Title order={2} pt="xl" ta={{ base: "center", sm: "left" }}>
        Skills
      </Title>

      <Stack gap="lg">
        {skills.map((skill) => (
          <Box key={`skills-${skill.category}`}>
            <Title order={3} pb="xs" pt="md">
              {skill.category}
            </Title>

            <Grid align="stretch">
              {skill.skills.map((technology) => (
                <Grid.Col
                  key={`skill-${technology}`}
                  span={{ base: 6, xs: 4, sm: 3, md: 2 }}
                  h="100%"
                >
                  <Paper className={classes.skillContainer}>
                    <TechIcon technology={technology} size={50} />

                    <Text>{getTechnologyName(technology)}</Text>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
