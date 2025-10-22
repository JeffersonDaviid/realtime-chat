import { Message } from "./Message";
import { User } from "./user";

export interface Community {
  _id: string,
  name: string,
  description: string,
  members: User[],
  messages: Message[]
}
