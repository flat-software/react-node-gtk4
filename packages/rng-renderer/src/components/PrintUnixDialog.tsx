import Gtk from "@/generated/girs/node-gtk-4.0.js";
import React, {forwardRef} from "react";
import {PrintUnixDialog} from "../generated/intrinsics.js";
import {createPortal} from "../portal.js";

export default forwardRef<
  Gtk.PrintUnixDialog,
  React.JSX.IntrinsicElements["PrintUnixDialog"]
>(function PrintUnixDialogComponent(props, ref) {
  return createPortal(<PrintUnixDialog ref={ref} {...props} />);
});
