import Gio from "@/generated/girs/node-gio-2.0.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import React, {forwardRef, useEffect, useState} from "react";
import {MenuButton} from "../generated/intrinsics.js";
import useForwardedRef from "../hooks/useForwardedRef.js";
import {createPortal} from "../portal.js";

type Props = Omit<React.JSX.IntrinsicElements["MenuButton"], "popover"> & {
  actionGroup?: Gio.ActionGroup;
  actionPrefix: string;
  popover?: (React.ReactElement & {ref?: React.Ref<Gtk.Popover>}) | null;
};

export default forwardRef<Gtk.MenuButton, Props>(function MenuButtonComponent(
  {popover, actionGroup, actionPrefix, ...props},
  ref
) {
  const [popoverWidget, setPopoverWidget] = useState<Gtk.Popover | null>(null);
  const [, setPopoverRef] = useForwardedRef(popover?.ref, setPopoverWidget);
  const [innerRef, setInnerRef] = useForwardedRef(ref);

  useEffect(() => {
    const menuButton = innerRef.current;

    if (!menuButton || !actionGroup) {
      return;
    }

    menuButton.insertActionGroup(actionPrefix, actionGroup);

    return () => {
      menuButton.insertActionGroup(actionPrefix, null);
    };
  }, [actionGroup, actionPrefix]);

  return (
    <>
      {popover
        ? createPortal(
            React.cloneElement(popover, {
              ref: setPopoverRef,
            })
          )
        : null}
      <MenuButton ref={setInnerRef} popover={popoverWidget} {...props} />
    </>
  );
});
