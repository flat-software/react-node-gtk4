import {
  ApplicationWindow,
  Box,
  Button,
  Gtk,
  useApplication,
} from "@react-node-gtk4/renderer";
import * as fs from "node:fs/promises";
import {FC, useEffect, useState} from "react";
import {TestLabel} from "./label";

export const App: FC = () => {
  const [count, setCount] = useState(0);
  const [isWindowVisible, setIsWindowVisible] = useState(false);
  const {quit} = useApplication();

  const onWindowShow = () => {
    console.log("On window show.");
    setIsWindowVisible(true);
  };

  useEffect(() => {
    if (!isWindowVisible) {
      return;
    }

    console.log("Running effect. ");

    Promise.resolve().then(() => {
      console.log("After then");
    });

    const test = async () => {
      console.log("Will open.");
      const dir = await fs.opendir(".");
      console.log("Did open.");
      console.log("Dir:", dir.path);
    };
    test();
  }, [isWindowVisible]);

  return (
    <ApplicationWindow
      title="Hello World 2"
      onCloseRequest={quit}
      onShow={onWindowShow}
      widthRequest={400}
      heightRequest={300}
    >
      <Box orientation={Gtk.Orientation.VERTICAL} spacing={10}>
        <TestLabel />
        <Box>You clicked {count} times</Box>
        <Box>You clicked {count} times 2</Box>
        <Button
          label="Click Me 3"
          onClicked={() => {
            setCount(count => count + 1);
          }}
        />
      </Box>
    </ApplicationWindow>
  );
};
