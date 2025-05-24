import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  NavLink,
  Space,
  Stack,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./Header.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

type HeaderProps = {
  activeSection: string;
  onClickLink: (section: string) => void;
};

export default function Header({ activeSection, onClickLink }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={classes.container}>
      <Container size="lg" py="md">
        <Flex justify="space-between" align="center" gap="lg">
          <Box flex={1}>
            <Button
              onClick={() => onClickLink("hero")}
              className={classes.logo}
              size="xl"
              variant="transparent"
            >
              Paolo Mura
            </Button>
          </Box>

          <Flex gap="lg" visibleFrom="sm">
            <Button
              component="button"
              onClick={() => onClickLink("projects")}
              className={classes.link}
              size="md"
              variant={
                activeSection === "projects" ? "selected" : "transparent"
              }
            >
              Projects
            </Button>

            <Button
              component="button"
              onClick={() => onClickLink("experiences")}
              className={classes.link}
              size="md"
              variant={
                activeSection === "experiences" ? "selected" : "transparent"
              }
            >
              Experience
            </Button>

            <Button
              component="button"
              onClick={() => onClickLink("skills")}
              className={classes.link}
              size="md"
              variant={activeSection === "skills" ? "selected" : "transparent"}
            >
              Skills
            </Button>
          </Flex>

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
          />

          <Burger
            aria-label="Toggle navigation"
            opened={opened}
            onClick={toggle}
            color="white"
            hiddenFrom="sm"
          />

          <Drawer
            opened={opened}
            onClose={toggle}
            position="top"
            withCloseButton={false}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            transitionProps={{ duration: 500 }}
            size="30%"
            hiddenFrom="sm"
          >
            <Box className={classes.drawerHeader}>
              <Flex justify="space-between" align="center" gap="lg">
                <Box flex={1}>
                  <Button
                    onClick={() => onClickLink("hero")}
                    className={classes.logo}
                    size="xl"
                    variant="transparent"
                  >
                    Paolo Mura
                  </Button>
                </Box>

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
                />

                <Burger
                  aria-label="Toggle navigation"
                  opened={opened}
                  onClick={toggle}
                  color="white"
                  hiddenFrom="sm"
                />
              </Flex>
            </Box>

            <Space h="44px" />

            <Stack>
              <NavLink
                label="Projects"
                onClick={() => {
                  onClickLink("projects");
                  toggle();
                }}
                active={activeSection === "projects"}
                flex={1}
              />
              <NavLink
                label="Experience"
                onClick={() => {
                  onClickLink("experiences");
                  toggle();
                }}
                active={activeSection === "experiences"}
                flex={1}
              />
              <NavLink
                label="Skills"
                onClick={() => {
                  onClickLink("skills");
                  toggle();
                }}
                active={activeSection === "skills"}
                flex={1}
              />
            </Stack>
          </Drawer>
        </Flex>
      </Container>
    </header>
  );
}
