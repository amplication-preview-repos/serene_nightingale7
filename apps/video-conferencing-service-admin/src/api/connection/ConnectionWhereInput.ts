import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionWhereInput = {
  connectedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
