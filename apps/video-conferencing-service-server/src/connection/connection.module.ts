import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConnectionModuleBase } from "./base/connection.module.base";
import { ConnectionService } from "./connection.service";
import { ConnectionController } from "./connection.controller";
import { ConnectionResolver } from "./connection.resolver";

@Module({
  imports: [ConnectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConnectionController],
  providers: [ConnectionService, ConnectionResolver],
  exports: [ConnectionService],
})
export class ConnectionModule {}
