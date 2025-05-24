import { getTechnologyName, isDarkLogo } from "@/utils";
import { Image, Tooltip } from "@mantine/core";
import classes from "./TechIcon.module.css";

type TechIconProps = {
  size?: number;
  technology: string;
  tooltip?: boolean;
};

type IconSVGProps = {
  size: number;
  technology: string;
  name: string;
};

const IconSVG = ({ size, technology, name }: IconSVGProps) => (
  <Image
    src={`/icons/${technology}-logo.svg`}
    alt={name}
    fit="contain"
    variant={isDarkLogo(technology) ? "dark" : "light"}
    className={classes.icon}
    h={size}
    w={size}
  />
);

export default function TechIcon({
  size = 24,
  technology,
  tooltip,
}: TechIconProps) {
  const name = getTechnologyName(technology);

  if (tooltip) {
    return (
      <Tooltip label={name}>
        <IconSVG size={size} technology={technology} name={name} />
      </Tooltip>
    );
  }

  return <IconSVG size={size} technology={technology} name={name} />;
}
