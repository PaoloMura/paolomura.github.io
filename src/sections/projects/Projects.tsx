import {
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import projects from "@/data/projects.json";
import { IconExternalLink } from "@tabler/icons-react";
import GridCard from "@/components/grid-card/GridCard";
import { TechIcon } from "@/components/tech-icon/TechIcon";
import Section from "@/components/section/Section";

export default function Projects() {
  return (
    <Section name="projects" variant="dark">
      <Grid gutter={{ base: "lg", sm: "md" }} pb="lg">
        {projects.map((project) => (
          <Grid.Col
            key={`project-${project.name}`}
            span={{ base: 12, sm: 6, md: 4 }}
            pos="relative"
          >
            <GridCard
              title={project.name}
              frontContent={
                <>
                  <Card.Section>
                    <Image src={project.image} alt="" height={160} />
                  </Card.Section>

                  <Stack pt="md" gap="xs">
                    <Title order={3} ta="left">
                      {project.name}
                    </Title>

                    <Group gap="xs">
                      {project.keywords.map((keyword) => (
                        <Badge key={`keyword-${keyword}`} variant="default">
                          {keyword}
                        </Badge>
                      ))}
                    </Group>

                    <Group gap="xs">
                      {project.technologies?.map((technology) => (
                        <TechIcon
                          key={`icon-${technology}`}
                          technology={technology}
                          tooltip
                        />
                      ))}
                    </Group>
                  </Stack>
                </>
              }
              backContent={
                <Flex
                  direction="column"
                  justify="space-evenly"
                  gap="lg"
                  h="100%"
                >
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
                </Flex>
              }
            />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  );
}
