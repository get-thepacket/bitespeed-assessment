import { Body, Controller, Post } from "@nestjs/common";
import { IdentityService } from "./identity.service";
import { IdentityPayloadDto } from "./dto/identityPayload.dto";

@Controller()
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post("/identify")
  identifyContact(@Body() body: IdentityPayloadDto) {
    return this.identityService.identityData(body);
  }
}
