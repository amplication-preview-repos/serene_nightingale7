import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  senderId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
