import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  connectedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
