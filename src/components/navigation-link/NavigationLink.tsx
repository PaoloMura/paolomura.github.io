import { useNavigation } from "@/providers/Navigation";
import { Button, NavLink } from "@mantine/core";
import classes from "./NavigationLink.module.css";

type LinkProps = {
  section: SectionName;
};

type DrawerLinkProps = LinkProps & {
  onClick: () => void;
};

export const LogoLink = () => {
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

export const Link = ({ section }: LinkProps) => {
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

export const DrawerLink = ({ section, onClick }: DrawerLinkProps) => {
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
