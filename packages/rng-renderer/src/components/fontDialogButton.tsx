import Gtk from "../generated/girs/node-gtk-4.0.js";
import {forwardRef, useMemo} from "react";
import * as R from "remeda";
import {FontDialogButton} from "../generated/intrinsics.js";

type Props = Omit<React.JSX.IntrinsicElements["FontDialogButton"], "dialog"> &
  Partial<Gtk.FontDialog>;

export default forwardRef<Gtk.FontDialogButton, Props>(
  function FontDialogButtonComponent(
    {title, modal = true, filter, fontMap, language, ...props},
    ref
  ) {
    if (!Gtk.FontDialog) {
      return null;
    }

    const dialog = useMemo(
      () =>
        new Gtk.FontDialog(
          R.omitBy(
            {
              title,
              modal,
              filter,
              fontMap,
              language,
            },
            R.isNullish
          )
        ),
      [title, modal, filter, fontMap, language]
    );

    return <FontDialogButton ref={ref} dialog={dialog} {...props} />;
  }
);
