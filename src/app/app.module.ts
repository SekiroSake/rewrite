import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { New_matter_proposalComponent } from './body/new_matter_proposal/new_matter_proposal.component';
import { Request_for_quoteComponent } from './body/request_for_quote/request_for_quote.component';
import { Revise_addComponent } from './body/revise_add/revise_add.component';
import { Get_helpComponent } from './body/get_help/get_help.component';
import { MatterComponent } from './body/dashboard/matter/matter.component';
import { Matter_revisionComponent } from './body/dashboard/matter_revision/matter_revision.component';
import { RfqComponent } from './body/dashboard/rfq/rfq.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      NavComponent,
      BodyComponent,
      FooterComponent,
      New_matter_proposalComponent,
      Request_for_quoteComponent,
      Revise_addComponent,
      Get_helpComponent,
      MatterComponent,
      Matter_revisionComponent,
      RfqComponent
   ],
   imports: [
      AngularFontAwesomeModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
