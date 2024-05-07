import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { CompetitionAddBComponent } from './components/Competition/competition-add-b/competition-add-b.component';
import { CompetitionDetailsComponent } from './components/Competition/competition-details/competition-details.component';
import { CompetitionDetailsBComponent } from './components/Competition/competition-details-b/competition-details-b.component';
import { CompetitionListComponent } from './components/Competition/competition-list/competition-list.component';
import { CompetitionListBComponent } from './components/Competition/competition-list-b/competition-list-b.component';
import { RegistrationDetailsComponent } from './components/Registration/registration-details/registration-details.component';
import { RegistrationDetailsBComponent } from './components/Registration/registration-details-b/registration-details-b.component';
import { RegistrationListComponent } from './components/Registration/registration-list/registration-list.component';
import { RegistrationListBComponent } from './components/Registration/registration-list-b/registration-list-b.component';
import { TicketDetailsComponent } from './components/Tickets/ticket-details/ticket-details.component';
import { TicketDetailsBComponent } from './components/Tickets/ticket-details-b/ticket-details-b.component';
import { TicketListBComponent } from './components/Tickets/ticket-list-b/ticket-list-b.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";
import {CompetitionService} from "./services/competition.service";
import {RegistrationService} from "./services/registration.service";
import {TicketService} from "./services/ticket.service";
import {UserService} from "./services/user.service";
import { TicketAddBComponent } from './components/Tickets/ticket-add-b/ticket-add-b.component';
import {HeaderFrontComponent} from "./components/FrontOffice/header-front/header-front.component";
import {
  AllTemplateFrontComponentComponent
} from "./components/FrontOffice/all-template-front-component/all-template-front-component.component";
import {RegistrationAddComponent} from "./components/Registration/registration-add/registration-add.component";
import {TicketListComponent} from "./components/Tickets/ticket-list/ticket-list.component";
import { CompetitionBackComponent } from './components/backOffice/competition-back/competition-back.component';
import { FooterAdminComponent } from './components/backOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './components/backOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './components/backOffice/side-admin/side-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFrontComponent,
    AllTemplateFrontComponentComponent,
    HeaderFrontComponent,
    BackOfficeComponent,
    CompetitionAddBComponent,
    CompetitionDetailsComponent,
    CompetitionDetailsBComponent,
    CompetitionListComponent,
    CompetitionListBComponent,
    RegistrationDetailsComponent,
    RegistrationAddComponent,
    RegistrationDetailsBComponent,
    RegistrationListComponent,
    RegistrationListBComponent,
    TicketAddBComponent,
    TicketDetailsComponent,
    TicketDetailsBComponent,
    TicketListBComponent,
    TicketListComponent,
    TicketAddBComponent,
    CompetitionBackComponent,FooterAdminComponent,HeaderAdminComponent,SideAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,RouterModule
  ],exports: [ReactiveFormsModule,FormsModule,RouterModule],
  providers: [
    CompetitionService,
    RegistrationService,
    TicketService,
    UserService,RouterModule,AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
