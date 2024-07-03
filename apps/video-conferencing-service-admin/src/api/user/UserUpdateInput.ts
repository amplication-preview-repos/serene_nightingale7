import { ConnectionUpdateManyWithoutUsersInput } from "./ConnectionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  connections?: ConnectionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  socketId?: string | null;
  username?: string;
};
