import { Entity, Column, ObjectIdColumn } from "typeorm";
import { IsNotEmpty, IsEmail } from "class-validator";
import { ObjectID } from "mongodb";

class Character {
  name: string;
}

@Entity()
export default class MailSendHistory {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column(type => Character)
  @IsNotEmpty()
  characters: Character[];
}
