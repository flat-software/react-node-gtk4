import {ApplicationWindow} from "@/generated/widgets/applicationWindow.js";
import "@/overrides/applicationWindow.js";

describe("ApplicationWindow overrides", () => {
  describe("commitMount", () => {
    test("should present node", () => {
      const window = new ApplicationWindow({}, ApplicationWindow.createNode());

      window.commitMount();

      expect(window.node.present).toHaveBeenCalled();
    });
  });
});
