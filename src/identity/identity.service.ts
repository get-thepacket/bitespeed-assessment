import { Injectable } from "@nestjs/common";
import { ContactEntity } from "../database/entities/contact.entity";
import { IdentityPayloadDto } from "./dto/identityPayload.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class IdentityService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>
  ) {}

  async identityData(payload: IdentityPayloadDto) {}

  async fetchContacts(query: IdentityPayloadDto) {
    return this.contactRepository.find({
      where: [
        {
          phoneNumber: query.phoneNumber,
        },
        {
          email: query.email,
        },
      ],
    });
  }
}
