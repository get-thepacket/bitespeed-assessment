import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";

export class ContactEntity extends BaseEntity {
  @Column({ type: "text", length: 16, nullable: true })
  phoneNumber: string;

  @Column({ type: "text", length: 256, nullable: true })
  email: string;

  @Column({ type: "enum", enum: ["primary", "secondary"], nullable: false })
  linkPrecedence: string;

  @Column({ type: "number", nullable: true })
  linkedId: string;

  @ManyToOne(() => ContactEntity, (contact) => contact.secondaryContacts)
  @JoinColumn({ name: "linkedId", referencedColumnName: "id" })
  primaryContact: ContactEntity;

  @OneToMany(() => ContactEntity, (contact) => contact.primaryContact)
  @JoinColumn({ name: "id", referencedColumnName: "linkedId" })
  secondaryContacts: ContactEntity[];
}
