import { getTechnologyName, isDarkLogo } from "@/utils";
import { Image, Tooltip } from "@mantine/core";
import classes from "./TechIcon.module.css";

type TechIconProps = {
  size?: number | string;
  technology: string;
  tooltip?: boolean;
};

type IconSVGProps = {
  width: number | string;
  height: number | string;
  technology: string;
  name: string;
};

type OrganisationIconProps = {
  organisation: string;
  height: string | number;
};

const IconSVG = ({ width, height, technology, name }: IconSVGProps) => (
  <Image
    src={`/icons/${technology}-logo.svg`}
    alt={name}
    fit="contain"
    variant={isDarkLogo(technology) ? "dark" : "light"}
    className={classes.icon}
    h={height}
    w={width}
  />
);

export function TechIcon({
  size = 24,
  technology,
  tooltip,
}: TechIconProps) {
  const name = getTechnologyName(technology);

  if (tooltip) {
    return (
      <Tooltip label={name}>
        <IconSVG width={size} height={size} technology={technology} name={name} />
      </Tooltip>
    );
  }

  return <IconSVG width={size} height={size} technology={technology} name={name} />;
}

export function OrganisationIcon({
  organisation,
  height
}: OrganisationIconProps) {
  return (
    <IconSVG
      width="auto"
      height={height}
      technology={organisation}
      name={getTechnologyName(organisation)}
    />
  );
}
