import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageUpdateInput = {
  room?: RoomWhereUniqueInput | null;
  senderId?: string | null;
  text?: string | null;
};
