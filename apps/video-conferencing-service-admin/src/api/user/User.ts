import { Connection } from "../connection/Connection";
import { JsonValue } from "type-fest";

export type User = {
  connections?: Array<Connection>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  socketId: string | null;
  updatedAt: Date;
  username: string;
};
