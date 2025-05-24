import { Box, Container, Flex, Title } from "@mantine/core";
import classes from "./Experiences.module.css";
import experiences from "@/data/experience.json";
import Experience from "@/components/experience/Experience";

type ExperienceProps = {
  targetRef: React.RefObject<HTMLDivElement>;
};

export default function Experiences({ targetRef }: ExperienceProps) {
  return (
    <Box className={classes.background}>
      <Container size="xs">
        <Flex align="flex-end" h="92px" ref={targetRef}>
          <Title order={2} ta={{ base: "center", sm: "left" }}>
            Experience
          </Title>
        </Flex>

        {experiences.map((experience, index) => (
          <Experience {...experience} key={`experience-${index}`} />
        ))}
      </Container>
    </Box>
  );
}
