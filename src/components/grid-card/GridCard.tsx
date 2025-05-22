import { Box, Card, Modal } from "@mantine/core";
import classes from "./GridCard.module.css";
import { useDisclosure } from "@mantine/hooks";

type GridCardProps = {
  title: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};

const MobileCard = ({ title, frontContent, backContent }: GridCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        className={classes.frontMobileCard}
        component="button"
        onClick={open}
      >
        {frontContent}
      </Card>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="100%"
        title={title}
        closeButtonProps={{ "aria-label": "Close modal" }}
        transitionProps={{ transition: "pop", duration: 400 }}
      >
        {backContent}
      </Modal>
    </>
  );
};

const DesktopCard = ({ frontContent, backContent }: GridCardProps) => {
  return (
    <>
      <Card className={classes.frontDesktopCard}>{frontContent}</Card>

      <Card className={classes.backDesktopCard}>{backContent}</Card>
    </>
  );
};

export default function GridCard({
  title,
  frontContent,
  backContent,
}: GridCardProps) {
  return (
    <>
      <Box hiddenFrom="sm" h="100%" w="100%">
        <MobileCard
          title={title}
          frontContent={frontContent}
          backContent={backContent}
        />
      </Box>

      <Box visibleFrom="sm" h="100%" w="100%">
        <DesktopCard
          title={title}
          frontContent={frontContent}
          backContent={backContent}
        />
      </Box>
    </>
  );
}
