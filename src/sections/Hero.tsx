import { Anchor, Container, Flex, Image, Text, Title } from "@mantine/core";
import profileHero from "/profile-hero.webp";
import profileHeroMobile from "/profile-hero-mobile.webp";
import { useMediaQuery } from "@mantine/hooks";

export default function Hero() {
  const isSm = useMediaQuery("(max-width: 768px)");
  const isMd = useMediaQuery("(max-width: 992px)");
  const isLg = useMediaQuery("(max-width: 1200px)");

  const containerSize = isMd ? "sm" : isLg ? "md" : "lg";

  return (
    <Container size={containerSize} h="100vh" pt="80px" pb="xl">
      <Flex
        justify="space-evenly"
        align="center"
        direction={isSm ? "column" : "row"}
        gap="xl"
        h="100%"
      >
        <Flex direction="column" justify="center" gap="1rem">
          <Text size="1.5rem" c="gray">
            Hi, I'm Paolo!
          </Text>
          <Title order={1} size="2.25rem">
            Software engineer at Sky
          </Title>
          <Text size="1.5rem" c="gray">
            I help build the product discovery pages on the{" "}
            <Anchor href="https://www.sky.com" target="_blank">
              sky.com
            </Anchor>{" "}
            website.
          </Text>
        </Flex>

        <Image
          radius="xl"
          src={isSm ? profileHeroMobile : profileHero}
          alt=""
          w={isSm ? "100%" : "50%"}
          h={isSm ? "45vh" : "75vh"}
        />
      </Flex>
    </Container>
  );
}
