import { Box, Container, Flex, Title } from "@mantine/core";
import classes from "./Section.module.css";
import { useNavigationRefs } from "@/providers/Navigation";

type SectionProps = {
  name: SectionName;
  variant?: "default" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  children?: React.ReactNode;
};

export default function Section({
  name,
  variant,
  size = "lg",
  children,
}: SectionProps) {
  const { ref, targetRef } = useNavigationRefs(name);

  return (
    <Box className={classes.background} variant={variant} ref={ref} id={name}>
      <Container size={size}>
        <Flex
          align="flex-end"
          justify={{ base: "center", sm: "left" }}
          h="92px"
          ref={targetRef}
        >
          <Title order={2} className={classes.title}>
            {name}
          </Title>
        </Flex>

        {children}
      </Container>
    </Box>
  );
}
