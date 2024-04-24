import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { ContactEntity } from "../database/entities/contact.entity";

@Module({
  imports: [DatabaseModule, ContactEntity],
  controllers: [],
  providers: [],
})
export class IdentityModule {}
