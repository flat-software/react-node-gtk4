import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {forwardRef, memo, useEffect} from "react";
import * as R from "remeda";
import {SpinButton} from "../generated/intrinsics.js";
import useForwardedRef from "../hooks/useForwardedRef.js";

type Props = React.JSX.IntrinsicElements["SpinButton"] & {
  range?: [number, number];
};

export default memo(
  forwardRef<Gtk.SpinButton, Props>(function SpinButtonComponent(
    {range = [], ...props},
    ref
  ) {
    const [innerRef, setInnerRef] = useForwardedRef(ref);

    useEffect(() => {
      const spinButton = innerRef.current;

      if (!spinButton) {
        return;
      }

      spinButton.setRange(range[0] ?? 0, range[1] ?? 0);

      return () => {
        spinButton.setRange(0, 0);
      };
    }, [range]);

    return <SpinButton ref={setInnerRef} {...props} />;
  }),
  R.isDeepEqual
);
