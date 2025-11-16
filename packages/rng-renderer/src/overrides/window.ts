import {Window} from "../generated/widgets/window.js";

const parent = {
  commitMount: Window.prototype.commitMount,
};

Window.prototype.commitMount = function (this: Window) {
  parent.commitMount.call(this);
  this.node.on("close-request", () => true, true);
};
