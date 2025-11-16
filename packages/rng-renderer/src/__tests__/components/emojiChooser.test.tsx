import EmojiChooser from "@/components/EmojiChooser.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import {findBy, render, setup} from "@/test-support/index.js";
import {createRef} from "react";

describe("EmojiChooser", () => {
  beforeEach(setup);

  test("should render", () => {
    render(<EmojiChooser />);

    const emojiChooser = findBy({type: "EmojiChooser"});

    expect(emojiChooser.node).toBeInstanceOf(Gtk.EmojiChooser);
  });

  test("should forward refs", () => {
    const ref = createRef<Gtk.EmojiChooser>();

    render(<EmojiChooser ref={ref} />);

    const emojiChooser = findBy({type: "EmojiChooser"});

    expect(ref.current).toBe(emojiChooser.node);
  });

  test("should handle unmount gracefully", () => {
    render(<EmojiChooser />);

    render(null);

    const emojiChooser = findBy({type: "EmojiChooser"});

    expect(emojiChooser).toBeNull();
  });
});
