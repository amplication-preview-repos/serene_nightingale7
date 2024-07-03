import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageCreateInput = {
  room?: RoomWhereUniqueInput | null;
  senderId?: string | null;
  text?: string | null;
};
