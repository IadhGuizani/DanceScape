import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionAddBComponent} from "./components/Competition/competition-add-b/competition-add-b.component";
import {CompetitionListComponent} from "./components/Competition/competition-list/competition-list.component";
import {CompetitionListBComponent} from "./components/Competition/competition-list-b/competition-list-b.component";
import {CompetitionDetailsComponent} from "./components/Competition/competition-details/competition-details.component";
import {CompetitionDetailsBComponent} from "./components/Competition/competition-details-b/competition-details-b.component";
import {RegistrationAddComponent} from "./components/Registration/registration-add/registration-add.component";
import {RegistrationDetailsComponent} from "./components/Registration/registration-details/registration-details.component";
import {RegistrationDetailsBComponent} from "./components/Registration/registration-details-b/registration-details-b.component";
import {RegistrationListComponent} from "./components/Registration/registration-list/registration-list.component";
import {RegistrationListBComponent} from "./components/Registration/registration-list-b/registration-list-b.component";
import {TicketDetailsComponent} from "./components/Tickets/ticket-details/ticket-details.component";
import {TicketDetailsBComponent} from "./components/Tickets/ticket-details-b/ticket-details-b.component";
import {TicketListBComponent} from "./components/Tickets/ticket-list-b/ticket-list-b.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TicketAddBComponent} from "./components/Tickets/ticket-add-b/ticket-add-b.component";
import {  AllTemplateFrontComponentComponent} from "./components/FrontOffice/all-template-front-component/all-template-front-component.component";
import {TicketListComponent} from "./components/Tickets/ticket-list/ticket-list.component";
import { CompetitionBackComponent } from './components/backOffice/competition-back/competition-back.component';

const routes: Routes = [
  { path: '', redirectTo: '/front-office', pathMatch: 'full' }, // Default route
  { path: 'front-office', component: AllTemplateFrontComponentComponent,children: [
      {path:'competition-list',component:CompetitionListComponent },
      {path:'competition-details/:id',component:CompetitionDetailsComponent },
      {path:'registration-add/:id',component:RegistrationAddComponent },
      {path:'registration-details/:id',component:RegistrationDetailsComponent },
      {path:'registration-list',component:RegistrationListComponent },
      {path:'ticket-list',component:TicketListComponent },
      {path:'ticket-details/:id',component:TicketDetailsComponent },



    ]},
    { path: 'back', component: CompetitionBackComponent,children: [
      {path:'competition-add-b',component:CompetitionAddBComponent },
      {path:'competition-list-b',component:CompetitionListBComponent },
      {path:'competition-details-b/:id',component:CompetitionDetailsBComponent },
      {path:'registration-details-b/:id',component:RegistrationDetailsBComponent },
      {path:'registration-list-b',component:RegistrationListBComponent },
      {path:'ticket-add-b/:id',component:TicketAddBComponent },
      {path:'ticket-details-b/:id',component:TicketDetailsBComponent },
      {path:'ticket-list-b',component:TicketListBComponent },



    ]}
  /*
  { path: 'back', redirectTo: '/back-office', pathMatch: 'full' }, // back route

   */

];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'top'}),
    FormsModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
