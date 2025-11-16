import {
  ApplicationWindow,
  Box,
  Button,
  Gtk,
  useApplication,
} from "@react-node-gtk4/renderer";
import {FC, useState} from "react";

export const App: FC = () => {
  const [count, setCount] = useState(0);
  const {quit} = useApplication();

  return (
    <ApplicationWindow title="Hello World" onCloseRequest={quit}>
      <Box orientation={Gtk.Orientation.VERTICAL}>
        <>Hello World! You clicked {count} times.</>
        <Button
          label="Click Me"
          onClicked={() => {
            setCount(count => count + 1);
          }}
        />
      </Box>
    </ApplicationWindow>
  );
};
