import { Room } from "../room/Room";
import { User } from "../user/User";

export type Connection = {
  connectedAt: Date | null;
  createdAt: Date;
  id: string;
  room?: Room | null;
  updatedAt: Date;
  user?: User | null;
};
