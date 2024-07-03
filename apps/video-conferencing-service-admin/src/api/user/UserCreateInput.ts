import { ConnectionCreateNestedManyWithoutUsersInput } from "./ConnectionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  connections?: ConnectionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  socketId?: string | null;
  username: string;
};
