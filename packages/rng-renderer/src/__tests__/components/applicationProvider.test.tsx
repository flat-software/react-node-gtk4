import ApplicationProvider, {
  ApplicationContext,
  withApplicationContext,
} from "../../components/applicationProvider.js";
import Gtk from "../../generated/girs/node-gtk-4.0.js";
import {Box} from "../../generated/intrinsics.js";
import useApplication from "../../hooks/useApplication.js";
import {findBy, render, setup} from "../../test-support/index.js";

beforeEach(setup);

describe("ApplicationProvider", () => {
  test("should render", () => {
    render(
      <ApplicationProvider value={null}>
        <Box />
      </ApplicationProvider>
    );

    const box = findBy({type: "Box"});

    expect(box.node).toBeInstanceOf(Gtk.Box);
  });
});

describe("withApplicationContext", () => {
  test("should render", () => {
    const context = {} as ApplicationContext;
    let application;

    const Component = () => {
      application = useApplication();
      return null;
    };

    render(withApplicationContext(<Component />, context));

    expect(application).toBe(context);
  });
});
