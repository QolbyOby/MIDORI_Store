import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import { Button } from "@/components/ui/button"


  export default function DrawerPage() {
    return (
      <Drawer>
        <DrawerContent>
        <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerClose />
          <DrawerFooter>
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }