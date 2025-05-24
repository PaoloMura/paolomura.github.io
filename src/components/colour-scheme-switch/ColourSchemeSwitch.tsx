import { useMantineColorScheme, useComputedColorScheme, Switch } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import classes from "./ColourSchemeSwitch.module.css";

export default function ColourSchemeSwitch () {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      aria-label="Toggle color scheme"
      size="xl"
      checked={computedColorScheme === "dark"}
      onChange={toggleColorScheme}
      onLabel={<IconSun size={16} stroke={2.5} />}
      offLabel={<IconMoon size={16} stroke={2.5} />}
      thumbIcon={
        computedColorScheme === "dark" ? (
          <IconMoon size={16} stroke={2.5} color="black" />
        ) : (
          <IconSun size={16} stroke={2.5} color="black" />
        )
      }
      color="gray"
      classNames={{ track: classes.switch }}
    />
  );
};
