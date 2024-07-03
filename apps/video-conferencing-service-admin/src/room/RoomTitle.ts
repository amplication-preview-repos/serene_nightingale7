import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "hostId";

export const RoomTitle = (record: TRoom): string => {
  return record.hostId?.toString() || String(record.id);
};
