import { Box, Grid, Paper, Stack, Text, Title } from "@mantine/core";
import skills from "@/data/skills.json";
import classes from "./Skills.module.css";
import { getTechnologyName } from "@/utils/getTechnologyName";
import { TechIcon } from "@/components/tech-icon/TechIcon";
import Section from "@/components/section/Section";

export default function Skills() {
  return (
    <Section name="skills" variant="dark">
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
    </Section>
  );
}
