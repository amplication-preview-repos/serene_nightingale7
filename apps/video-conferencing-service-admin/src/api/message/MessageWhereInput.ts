import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  senderId?: StringNullableFilter;
  text?: StringNullableFilter;
};
