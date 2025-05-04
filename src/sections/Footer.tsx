import {
  Container,
  Group,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Footer.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import IconButton from "../components/IconButton";

export default function Footer() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const backgroundColor =
    colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3];

  return (
    <footer className={classes.footer} style={{ backgroundColor }}>
      <Container>
        <Title order={2}>Contact</Title>
        <Text>You can follow me on:</Text>

        <Group
          gap="xl"
          py="md"
          wrap="nowrap"
          w="100%"
          className={classes.group}
        >
          <IconButton
            Icon={IconBrandGithub}
            href="https://github.com/PaoloMura/"
            ariaLabel="GitHub"
          />
          <IconButton
            Icon={IconBrandLinkedin}
            href="https://www.linkedin.com/in/paolo-mura-00/"
            ariaLabel="LinkedIn"
          />
          <IconButton
            Icon={IconBrandYoutube}
            href="https://www.youtube.com/@paolo_mura"
            ariaLabel="YouTube"
          />
          <IconButton
            Icon={IconBrandTiktok}
            href="https://www.tiktok.com/@paolomura00"
            ariaLabel="TikTok"
          />
        </Group>
      </Container>
    </footer>
  );
}
