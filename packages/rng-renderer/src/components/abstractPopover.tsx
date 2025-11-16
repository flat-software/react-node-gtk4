import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {cloneElement, createElement, forwardRef, useEffect} from "react";
import useForwardedRef from "../hooks/useForwardedRef.js";
import {createPortal} from "../portal.js";

type ElementType = "Popover" | "PopoverMenu" | "EmojiChooser";

export type AbstractPopoverProps<T extends ElementType> = Omit<
  React.JSX.IntrinsicElements[T],
  "children"
> & {
  elementType: T;
  children?: (React.ReactElement & {ref?: React.Ref<Gtk.Widget>}) | null;
  content?: (React.ReactElement & {ref?: React.Ref<Gtk.Widget>}) | null;
  open?: boolean;
};

export default forwardRef<Gtk.Popover, AbstractPopoverProps<ElementType>>(
  function AbstractPopoverComponent(
    {content, elementType, open, children, ...props},
    ref
  ) {
    const [innerRef, setInnerRef] = useForwardedRef(ref);
    const [childRef, setChildRef] = useForwardedRef(children?.ref);
    const [contentRef, setContentRef] = useForwardedRef(content?.ref);

    useEffect(() => {
      const content = contentRef.current;
      const popover = innerRef.current;
      const child = childRef.current;

      if (!popover) {
        return;
      }

      if (child && popover.getParent() !== child) {
        popover.setParent(child);
      }

      if (content) {
        popover.setChild(content);
      }
    }, [contentRef.current, childRef.current]);

    useEffect(() => {
      const popover = innerRef.current;

      if (!popover) {
        return;
      }

      if (open) {
        popover.popup();
      } else {
        popover.popdown();
      }
    }, [open]);

    return (
      <>
        {createPortal(
          <>
            {createElement(elementType, {
              ref: setInnerRef,
              ...props,
            })}
            {content
              ? cloneElement(content, {
                  ref: setContentRef,
                })
              : null}
          </>
        )}
        {children
          ? cloneElement(children, {
              ref: setChildRef,
            })
          : null}
      </>
    );
  }
);
