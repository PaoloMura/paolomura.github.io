import {
  Container,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Header.module.css";

export default function Header() {
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const backgroundColor =
    computedColorScheme === "dark"
      ? theme.colors.dark[9]
      : theme.colors.gray[3];

  return (
    <header className={classes.container} style={{ backgroundColor }}>
      <Container size="lg" py="md">
        <Switch
          label="Toggle dark mode"
          size="lg"
          checked={colorScheme === "dark"}
          onChange={toggleColorScheme}
        />
      </Container>
    </header>
  );
}
