import {Ticket} from "./ticket";
import {User} from "./user";
import {Registration} from "./registration";


export interface Competition {
  id: number;
  name?:string;
  date?:Date;
  venue?:string;
  category?:string;
  description?:string;
  maxregistrations?:number;
  tickets: Ticket[];
  registrations: Registration[];
  user?:User;
}
