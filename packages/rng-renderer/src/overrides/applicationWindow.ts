import {ApplicationWindow} from "@/generated/widgets/applicationWindow.js";

const parent = {
  commitMount: ApplicationWindow.prototype.commitMount,
};

ApplicationWindow.prototype.commitMount = function (this: ApplicationWindow) {
  parent.commitMount.call(this);
  this.node.present();
};
