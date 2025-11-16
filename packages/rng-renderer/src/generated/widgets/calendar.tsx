import Gtk from "../girs/node-gtk-4.0.js";
import {Widget} from "./widget.js";

export class Calendar<T extends Gtk.Calendar = Gtk.Calendar> extends Widget<T> {
  static createNode() {
    return new Gtk.Calendar({});
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue);
    switch (propName) {
      case "date":
        this.node.setDate(newValue);
        break;
      case "day":
        this.node.setDay(newValue);
        break;
      case "month":
        this.node.setMonth(newValue);
        break;
      case "showDayNames":
        this.node.setShowDayNames(newValue);
        break;
      case "showHeading":
        this.node.setShowHeading(newValue);
        break;
      case "showWeekNumbers":
        this.node.setShowWeekNumbers(newValue);
        break;
      case "year":
        this.node.setYear(newValue);
        break;
      case "name":
        this.node.name = newValue;
        break;
      case "accessibleRole":
        this.node.accessibleRole = newValue;
        break;
      case "onDaySelected":
        this.setHandler("day-selected", newValue);
        break;
      case "onNextMonth":
        this.setHandler("next-month", newValue);
        break;
      case "onNextYear":
        this.setHandler("next-year", newValue);
        break;
      case "onPrevMonth":
        this.setHandler("prev-month", newValue);
        break;
      case "onPrevYear":
        this.setHandler("prev-year", newValue);
        break;
      case "onNotifyDate":
        this.setHandler("notify::date", newValue);
        break;
      case "onNotifyDay":
        this.setHandler("notify::day", newValue);
        break;
      case "onNotifyMonth":
        this.setHandler("notify::month", newValue);
        break;
      case "onNotifyShowDayNames":
        this.setHandler("notify::showDayNames", newValue);
        break;
      case "onNotifyShowHeading":
        this.setHandler("notify::showHeading", newValue);
        break;
      case "onNotifyShowWeekNumbers":
        this.setHandler("notify::showWeekNumbers", newValue);
        break;
      case "onNotifyYear":
        this.setHandler("notify::year", newValue);
        break;
      case "onNotifyName":
        this.setHandler("notify::name", newValue);
        break;
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessibleRole", newValue);
        break;
      /* istanbul ignore next */
      default:
        break;
    }
  }
}
