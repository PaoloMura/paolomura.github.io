import { ActionIcon } from "@mantine/core";

type IconProps = {
  Icon: React.FC<any>;
  href: string;
  ariaLabel: string;
};

export default function IconButton({ Icon, href, ariaLabel }: IconProps) {
  return (
    <ActionIcon
      component="a"
      color="gray"
      radius="xl"
      size={50}
      aria-label={ariaLabel}
      href={href}
      target="_blank"
    >
      <Icon size={38} stroke={1.5} />
    </ActionIcon>
  );
}
