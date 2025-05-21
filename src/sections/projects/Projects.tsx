import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import classes from "./Projects.module.css";
import projects from "@/data/projects.json";
import { getTechnologyName } from "@/utils/getTechnologyName";
import { IconExternalLink } from "@tabler/icons-react";
import { isDarkLogo } from "@/utils/isDarkLogo";

export default function Projects() {
  return (
    <Box className={classes.background}>
      <Container size="lg">
        <Title order={2} pb="md">
          Projects
        </Title>
        <Grid>
          {projects.map((project) => (
            <Grid.Col
              key={`project-${project.name}`}
              span={{ base: 12, sm: 6, md: 4 }}
              pos="relative"
            >
              <Card className={classes.frontCard}>
                <Card.Section>
                  <Image src={project.image} alt="" height={160} />
                </Card.Section>

                <Stack pt="md" gap="xs">
                  <Title order={3}>{project.name}</Title>

                  <Group gap="xs">
                    {project.keywords.map((keyword) => (
                      <Badge variant="light">{keyword}</Badge>
                    ))}
                  </Group>

                  <Group gap="xs">
                    {project.technologies?.map((technology) => {
                      const name = getTechnologyName(technology);
                      return (
                        <Tooltip label={name} key={technology}>
                          <Box
                            className={classes.logoContainer}
                            __vars={{
                              "--logo-color": isDarkLogo(technology)
                                ? "var(--mantine-color-gray-3)"
                                : "transparent",
                            }}
                          >
                            <Image
                              src={`/icons/${technology}-logo.svg`}
                              alt={name}
                              fit="contain"
                              h={24}
                              w={24}
                            />
                          </Box>
                        </Tooltip>
                      );
                    })}
                  </Group>
                </Stack>
              </Card>

              <Card className={classes.backCard}>
                <Text>{project.description}</Text>
                <Stack gap="xs">
                  {project.ctas.map((cta, index) => (
                    <Button
                      key={`project-cta-${index}`}
                      component="a"
                      target="_blank"
                      href={cta.url}
                      rightSection={<IconExternalLink size={14} />}
                      variant="outline"
                    >
                      {cta.text}
                    </Button>
                  ))}
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
