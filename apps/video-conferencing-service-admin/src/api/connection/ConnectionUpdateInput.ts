import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConnectionUpdateInput = {
  connectedAt?: Date | null;
  room?: RoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
