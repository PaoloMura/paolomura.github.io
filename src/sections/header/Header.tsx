import {
  Container,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./Header.module.css";

export default function Header() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={classes.container}>
      <Container size="lg" py="md">
        <Switch
          label="Toggle dark mode"
          size="md"
          checked={colorScheme === "dark"}
          onChange={toggleColorScheme}
        />
      </Container>
    </header>
  );
}
