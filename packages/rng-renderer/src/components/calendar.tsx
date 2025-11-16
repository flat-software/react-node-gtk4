import Gtk from "@/generated/girs/node-gtk-4.0.js";
import _ from "lodash";
import {forwardRef, memo, useEffect} from "react";
import {Calendar} from "../generated/intrinsics.js";
import useForwardedRef from "../hooks/useForwardedRef.js";

type Props = React.JSX.IntrinsicElements["Calendar"] & {
  markedDays?: number[];
};

export default memo(
  forwardRef<Gtk.Calendar, Props>(function CalendarComponent(
    {markedDays = [], ...props},
    ref
  ) {
    const [innerRef, setInnerRef] = useForwardedRef(ref);

    useEffect(() => {
      const calendar = innerRef.current;

      if (!calendar) {
        return;
      }

      markedDays.forEach(day => {
        calendar.markDay(day);
      });

      return () => {
        markedDays.forEach(day => {
          calendar.unmarkDay(day);
        });
      };
    }, [markedDays]);

    return <Calendar ref={setInnerRef} {...props} />;
  }),
  _.isEqual
);
