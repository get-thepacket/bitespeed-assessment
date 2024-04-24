import { IsOptional, IsString } from "class-validator";

export class IdentityPayloadDto {
  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  email: string;
}
