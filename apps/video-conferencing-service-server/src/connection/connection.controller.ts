import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConnectionService } from "./connection.service";
import { ConnectionControllerBase } from "./base/connection.controller.base";

@swagger.ApiTags("connections")
@common.Controller("connections")
export class ConnectionController extends ConnectionControllerBase {
  constructor(
    protected readonly service: ConnectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
