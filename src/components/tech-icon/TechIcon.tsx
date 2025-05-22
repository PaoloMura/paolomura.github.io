import { getTechnologyName } from "@/utils/getTechnologyName";
import { isDarkLogo } from "@/utils/isDarkLogo";
import { Box, Image, Tooltip } from "@mantine/core";
import classes from "./TechIcon.module.css";

type TechIconProps = {
  technology: string;
};

export default function TechIcon({ technology }: TechIconProps) {
  const name = getTechnologyName(technology);

  return (
    <Tooltip label={name}>
      <Box
        className={classes.container}
        variant={isDarkLogo(technology) ? "dark" : "light"}
      >
        <Image
          src={`/icons/${technology}-logo.svg`}
          alt={name}
          fit="contain"
          h={24}
          w={24}
        />
      </Box>
    </Tooltip>
  );
}
