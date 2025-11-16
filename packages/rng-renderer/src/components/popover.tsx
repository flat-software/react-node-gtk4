import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {forwardRef} from "react";
import AbstractPopover, {AbstractPopoverProps} from "./abstractPopover.js";

type Props = Omit<AbstractPopoverProps<"Popover">, "elementType">;

export default forwardRef<Gtk.Popover, Props>(
  function PopoverComponent(props, ref) {
    return <AbstractPopover {...props} ref={ref} elementType="Popover" />;
  }
);
