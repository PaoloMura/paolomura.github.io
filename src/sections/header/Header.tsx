import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  NavLink,
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

type LogoProps = {
  onClick: () => void;
};

type LinkProps = {
  section: string;
  activeSection: string;
  onClick: () => void;
};

const Logo = ({ onClick }: LogoProps) => (
  <Button onClick={onClick} className={classes.logo} variant="transparent">
    Paolo Mura
  </Button>
);

const Link = ({ section, activeSection, onClick }: LinkProps) => (
  <Button
    component="button"
    onClick={onClick}
    size="md"
    variant={activeSection === section ? "selected" : "transparent"}
    className={classes.link}
  >
    {section}
  </Button>
);

const ColourSchemeSwitch = () => {
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

export default function Header({ activeSection, onClickLink }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.container}>
      <Container size="lg" py="md">
        <Flex justify="space-between" align="center" gap="lg">
          <Logo onClick={() => onClickLink("hero")} />

          <Box flex={1} />

          <Flex gap="lg" visibleFrom="sm">
            <Link
              section="projects"
              activeSection={activeSection}
              onClick={() => onClickLink("projects")}
            />

            <Link
              section="experiences"
              activeSection={activeSection}
              onClick={() => onClickLink("experiences")}
            />

            <Link
              section="skills"
              activeSection={activeSection}
              onClick={() => onClickLink("skills")}
            />
          </Flex>

          <ColourSchemeSwitch />

          <Burger
            aria-label="Toggle navigation"
            opened={opened}
            onClick={toggle}
            color="white"
            hiddenFrom="sm"
            className={classes.burger}
          />
        </Flex>
      </Container>

      <Drawer
        opened={opened}
        onClose={toggle}
        position="top"
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ duration: 500 }}
        size="30%"
        hiddenFrom="sm"
        styles={{ body: { padding: 0, height: "100%" } }}
      >
        <Flex direction="column" h="100%">
          <Box className={classes.drawerHeader}>
            <Container size="lg" py="md">
              <Flex justify="space-between" align="center" gap="lg">
                <Box flex={1}>
                  <Logo onClick={() => onClickLink("hero")} />
                </Box>

                <ColourSchemeSwitch />

                <Burger
                  aria-label="Toggle navigation"
                  opened={opened}
                  onClick={toggle}
                  color="white"
                  hiddenFrom="sm"
                  className={classes.burger}
                />
              </Flex>
            </Container>
          </Box>

          <NavLink
            label="Projects"
            onClick={() => {
              onClickLink("projects");
              toggle();
            }}
            active={activeSection === "projects"}
            flex={1}
            className={classes.drawerLink}
          />
          <NavLink
            label="Experience"
            onClick={() => {
              onClickLink("experiences");
              toggle();
            }}
            active={activeSection === "experiences"}
            flex={1}
            className={classes.drawerLink}
          />
          <NavLink
            label="Skills"
            onClick={() => {
              onClickLink("skills");
              toggle();
            }}
            active={activeSection === "skills"}
            flex={1}
            className={classes.drawerLink}
          />
        </Flex>
      </Drawer>
    </header>
  );
}
