import { ConnectionListRelationFilter } from "../connection/ConnectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  connections?: ConnectionListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  socketId?: StringNullableFilter;
  username?: StringFilter;
};
