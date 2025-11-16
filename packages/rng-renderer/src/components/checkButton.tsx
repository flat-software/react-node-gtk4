import Gtk from "../generated/girs/node-gtk-4.0.js";
import {forwardRef, useCallback, useEffect, useState} from "react";
import {CheckButton} from "../generated/intrinsics.js";
import useForwardedRef from "../hooks/useForwardedRef.js";
import {createPortal} from "../portal.js";

type Props = Omit<React.JSX.IntrinsicElements["CheckButton"], "group"> & {
  radio?: boolean;
};

export default forwardRef<Gtk.CheckButton, Props>(function CheckButtonComponent(
  {radio, active = false, ...props},
  ref
) {
  const [group, setGroup] = useState<Gtk.CheckButton | null>(null);
  const [innerRef, setInnerRef] = useForwardedRef(ref);

  const groupRef = useCallback((node: Gtk.CheckButton | null) => {
    setGroup(node);
  }, []);

  useEffect(() => {
    const checkButton = innerRef.current;
    if (!checkButton) {
      return;
    }

    checkButton.setActive(active ?? false);

    return () => {
      checkButton.setActive(false);
    };
  }, [active]);

  return (
    <>
      {radio ? createPortal(<CheckButton ref={groupRef} />) : null}
      <CheckButton ref={setInnerRef} group={group} {...props} />
    </>
  );
});
