import { ConnectionListRelationFilter } from "../connection/ConnectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type RoomWhereInput = {
  connections?: ConnectionListRelationFilter;
  hostId?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  roomId?: StringNullableFilter;
};
