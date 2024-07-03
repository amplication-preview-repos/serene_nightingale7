import { ConnectionUpdateManyWithoutRoomsInput } from "./ConnectionUpdateManyWithoutRoomsInput";
import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  connections?: ConnectionUpdateManyWithoutRoomsInput;
  hostId?: string | null;
  messages?: MessageUpdateManyWithoutRoomsInput;
  roomId?: string | null;
};
