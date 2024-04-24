import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { IdentityModule } from "../identity/identity.module";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [IdentityModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
