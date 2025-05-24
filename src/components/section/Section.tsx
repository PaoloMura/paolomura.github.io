import { Box, Container, Title } from "@mantine/core";
import classes from "./Section.module.css";
import { useNavigationRefs } from "@/providers/Navigation";

type SectionProps = {
  name: SectionName;
  variant?: "light" | "dark";
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
        <Title order={2} className={classes.title} ref={targetRef}>
          {name}
        </Title>

        {children}
      </Container>
    </Box>
  );
}
