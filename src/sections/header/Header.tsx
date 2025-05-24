import { Box, Burger, Container, Drawer, Flex } from "@mantine/core";
import classes from "./Header.module.css";
import { useDisclosure } from "@mantine/hooks";
import ColourSchemeSwitch from "@/components/colour-scheme-switch/ColourSchemeSwitch";
import {
  DrawerLink,
  Link,
  LogoLink,
} from "@/components/navigation-link/NavigationLink";

type BurgerBtnProps = {
  opened: boolean;
  toggle: () => void;
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
          <LogoLink />

          <Box flex={1} />

          <Flex gap="lg" visibleFrom="sm">
            <Link section="projects" />
            <Link section="experience" />
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
                  <LogoLink onClick={toggle} />
                </Box>

                <ColourSchemeSwitch />

                <BurgerBtn opened={opened} toggle={toggle} />
              </Flex>
            </Container>
          </Box>

          <DrawerLink section="projects" onClick={toggle} />
          <DrawerLink section="experience" onClick={toggle} />
          <DrawerLink section="skills" onClick={toggle} />
        </Flex>
      </Drawer>
    </header>
  );
}
