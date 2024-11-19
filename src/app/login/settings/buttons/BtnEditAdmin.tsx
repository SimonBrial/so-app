import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  UnstyledButton,
  Drawer,
  Center,
  Stack,
} from "@mantine/core";
import TooltipLayout from "@/components/TooltipLayout";
import classesBtn from "@/styles/btn-styles.module.css";
import { HiOutlinePencil } from "@/icons";
import { SuperAdminReadLayout } from "../super-admin/SuperAdminReadLayout";

export function BtnEditAdmin(/* { idToEdit }: { idToEdit: string } */) {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  // const [data, setData] = useState<ListDBProps[]>([]);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataToShow[0] !== undefined) {
          setData(dataToShow);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dataToShow]); */
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 0.5rem",
            height: "95vh",
          }}
        >
          <Stack
            justify="space-between"
            style={{
              padding: "0 0.8rem",
              height: "95vh",
            }}
          >
            <SuperAdminReadLayout showDrawner={close}/>
          </Stack>
        </Stack>
      </Drawer>
      <TooltipLayout label="Editar" position="top">
        <UnstyledButton
          variant="transparent"
          color="gray"
          aria-label="Editar"
          className={
            colorScheme === "light"
              ? classesBtn.btnEdit_item
              : classesBtn.btnEdit_item_dark
          }
          onClick={() => {
            open();
            // fnGetUser(idToEdit);
          }}
        >
          <Center>
            <HiOutlinePencil />
          </Center>
        </UnstyledButton>
      </TooltipLayout>
    </>
  );
}
