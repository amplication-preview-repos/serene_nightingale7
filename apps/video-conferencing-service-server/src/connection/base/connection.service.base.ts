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
  Connection as PrismaConnection,
  Room as PrismaRoom,
  User as PrismaUser,
} from "@prisma/client";

export class ConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConnectionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.connection.count(args);
  }

  async connections(
    args: Prisma.ConnectionFindManyArgs
  ): Promise<PrismaConnection[]> {
    return this.prisma.connection.findMany(args);
  }
  async connection(
    args: Prisma.ConnectionFindUniqueArgs
  ): Promise<PrismaConnection | null> {
    return this.prisma.connection.findUnique(args);
  }
  async createConnection(
    args: Prisma.ConnectionCreateArgs
  ): Promise<PrismaConnection> {
    return this.prisma.connection.create(args);
  }
  async updateConnection(
    args: Prisma.ConnectionUpdateArgs
  ): Promise<PrismaConnection> {
    return this.prisma.connection.update(args);
  }
  async deleteConnection(
    args: Prisma.ConnectionDeleteArgs
  ): Promise<PrismaConnection> {
    return this.prisma.connection.delete(args);
  }

  async getRoom(parentId: string): Promise<PrismaRoom | null> {
    return this.prisma.connection
      .findUnique({
        where: { id: parentId },
      })
      .room();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.connection
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
