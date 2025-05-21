import { Anchor, Container, Flex, Image, Text, Title } from "@mantine/core";
import profileHero from "/profile-hero.webp";
import profileHeroMobile from "/profile-hero-mobile.webp";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <Container className={classes.container}>
      <Flex
        align="center"
        direction={{ base: "column", sm: "row" }}
        gap="xl"
        h="100%"
        justify="space-evenly"
      >
        <Flex direction="column" justify="center" gap="1rem">
          <Text size="1.5rem" c="gray" fw={600}>
            Hi, I'm Paolo!
          </Text>
          
          <Title order={1}>Software engineer at Sky</Title>
          
          <Text size="1.5rem" c="gray">
            I help build the product discovery pages on the{" "}
            <Anchor href="https://www.sky.com" target="_blank" fw={700}>
              sky.com
            </Anchor>{" "}
            website.
          </Text>
        </Flex>

        <Image
          radius="xl"
          src={profileHeroMobile}
          alt=""
          hiddenFrom="sm"
          w="100%"
          h="45vh"
        />

        <Image
          radius="xl"
          src={profileHero}
          alt=""
          visibleFrom="sm"
          w="50%"
          h="75vh"
        />
      </Flex>
    </Container>
  );
}
