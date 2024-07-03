/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Room as PrismaRoom,
  Connection as PrismaConnection,
  Message as PrismaMessage,
} from "@prisma/client";

export class RoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoomCountArgs, "select">): Promise<number> {
    return this.prisma.room.count(args);
  }

  async rooms(args: Prisma.RoomFindManyArgs): Promise<PrismaRoom[]> {
    return this.prisma.room.findMany(args);
  }
  async room(args: Prisma.RoomFindUniqueArgs): Promise<PrismaRoom | null> {
    return this.prisma.room.findUnique(args);
  }
  async createRoom(args: Prisma.RoomCreateArgs): Promise<PrismaRoom> {
    return this.prisma.room.create(args);
  }
  async updateRoom(args: Prisma.RoomUpdateArgs): Promise<PrismaRoom> {
    return this.prisma.room.update(args);
  }
  async deleteRoom(args: Prisma.RoomDeleteArgs): Promise<PrismaRoom> {
    return this.prisma.room.delete(args);
  }

  async findConnections(
    parentId: string,
    args: Prisma.ConnectionFindManyArgs
  ): Promise<PrismaConnection[]> {
    return this.prisma.room
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .connections(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.room
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }
}
