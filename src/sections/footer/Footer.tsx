import { Container, Group, Text, Title } from "@mantine/core";
import classes from "./Footer.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import IconButton from "@/components/icon-button/IconButton";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Title order={2}>Contact</Title>
        <Text>You can follow me on:</Text>

        <Group
          gap="xl"
          wrap="nowrap"
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
