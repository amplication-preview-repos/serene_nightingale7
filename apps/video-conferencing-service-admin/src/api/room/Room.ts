import { Connection } from "../connection/Connection";
import { Message } from "../message/Message";

export type Room = {
  connections?: Array<Connection>;
  createdAt: Date;
  hostId: string | null;
  id: string;
  messages?: Array<Message>;
  roomId: string | null;
  updatedAt: Date;
};
