import {Competition} from "./competition";

export interface Registration {
  rid: number;
  dancername?: string;
  competition?: Competition;
  competitionid: number; // Used only for creating a new registration

}
