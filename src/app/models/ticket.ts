  import {Competition} from "./competition";
  import {TicketType} from "./ticket-type";

  export interface Ticket {
    TID: number;
    price: number;
    type:TicketType;
    spectator:string;
    reservedseats: number;
    competitionid:number ;
    competition?:Competition;

  }
