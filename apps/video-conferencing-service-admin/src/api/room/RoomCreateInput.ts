import { ConnectionCreateNestedManyWithoutRoomsInput } from "./ConnectionCreateNestedManyWithoutRoomsInput";
import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  connections?: ConnectionCreateNestedManyWithoutRoomsInput;
  hostId?: string | null;
  messages?: MessageCreateNestedManyWithoutRoomsInput;
  roomId?: string | null;
};
