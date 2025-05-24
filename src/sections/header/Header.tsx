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
import { useNavigation } from "@/providers/Navigation";

type LinkProps = {
  section: SectionName;
};

type DrawerLinkProps = LinkProps & {
  onClick: () => void;
};

type BurgerBtnProps = {
  opened: boolean;
  toggle: () => void;
};

const Logo = () => {
  const { navigateToSection } = useNavigation();
  return (
    <Button
      onClick={() => navigateToSection("hero")}
      className={classes.logo}
      variant="transparent"
    >
      Paolo Mura
    </Button>
  );
};

const Link = ({ section }: LinkProps) => {
  const { activeSection, navigateToSection } = useNavigation();

  return (
    <Button
      component="button"
      onClick={() => navigateToSection(section)}
      size="md"
      variant={activeSection === section ? "selected" : "transparent"}
      className={classes.link}
    >
      {section}
    </Button>
  );
};

const DrawerLink = ({ section, onClick }: DrawerLinkProps) => {
  const { activeSection, navigateToSection } = useNavigation();

  return (
    <NavLink
      label={section}
      onClick={() => {
        navigateToSection(section);
        onClick();
      }}
      active={activeSection === section}
      flex={1}
      className={classes.drawerLink}
    />
  );
};

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

const BurgerBtn = ({ opened, toggle }: BurgerBtnProps) => (
  <Burger
    aria-label="Toggle navigation"
    opened={opened}
    onClick={toggle}
    color="white"
    hiddenFrom="sm"
    className={classes.burger}
  />
);

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.container}>
      <Container size="lg" py="md">
        <Flex justify="space-between" align="center" gap="lg">
          <Logo />

          <Box flex={1} />

          <Flex gap="lg" visibleFrom="sm">
            <Link section="projects" />
            <Link section="experiences" />
            <Link section="skills" />
          </Flex>

          <ColourSchemeSwitch />

          <BurgerBtn opened={opened} toggle={toggle} />
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
                  <Logo />
                </Box>

                <ColourSchemeSwitch />

                <BurgerBtn opened={opened} toggle={toggle} />
              </Flex>
            </Container>
          </Box>

          <DrawerLink section="projects" onClick={toggle} />
          <DrawerLink section="experiences" onClick={toggle} />
          <DrawerLink section="skills" onClick={toggle} />
        </Flex>
      </Drawer>
    </header>
  );
}
