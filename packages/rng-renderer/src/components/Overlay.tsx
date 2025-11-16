import Gtk from "@/generated/girs/node-gtk-4.0.js";
import React, {forwardRef, useEffect} from "react";
import {Overlay} from "../generated/intrinsics.js";
import useForwardedRef from "../hooks/useForwardedRef.js";
import {createPortal} from "../portal.js";

type Props = React.JSX.IntrinsicElements["Overlay"] & {
  content: React.ReactElement & {ref?: React.Ref<Gtk.Widget>};
};

export default forwardRef<Gtk.Overlay, Props>(function OverlayComponent(
  {content, ...props},
  ref
) {
  const [innerRef, setInnerRef] = useForwardedRef(ref);
  const [contentRef, setContentRef] = useForwardedRef(content.ref);

  useEffect(() => {
    const overlay = innerRef.current;
    const content = contentRef.current;

    if (!overlay || !content) {
      return;
    }

    overlay.setChild(content);

    return () => {
      overlay.setChild(null);
    };
  }, [contentRef.current]);

  return (
    <>
      {createPortal(React.cloneElement(content, {ref: setContentRef}))}
      <Overlay ref={setInnerRef} {...props} />
    </>
  );
});
