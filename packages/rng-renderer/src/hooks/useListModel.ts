import {useContext} from "react";
import {ListModelContext} from "../components/listModelProvider.js";

export default function useListModel() {
  const model = useContext(ListModelContext);

  if (model === null) {
    throw new Error("useListModel must be used within a ListModelProvider");
  }

  return model;
}
