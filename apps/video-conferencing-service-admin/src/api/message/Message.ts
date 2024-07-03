import { Room } from "../room/Room";

export type Message = {
  createdAt: Date;
  id: string;
  room?: Room | null;
  senderId: string | null;
  text: string | null;
  updatedAt: Date;
};
