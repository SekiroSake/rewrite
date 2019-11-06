import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { New_matter_proposalComponent } from './body/new_matter_proposal/new_matter_proposal.component';
import { Request_for_quoteComponent } from './body/request_for_quote/request_for_quote.component';
import { Revise_addComponent } from './body/revise_add/revise_add.component';
import { Get_helpComponent } from './body/get_help/get_help.component';
import { MatterComponent } from './body/dashboard/matter/matter.component';
import { Matter_revisionComponent } from './body/dashboard/matter_revision/matter_revision.component';
import { RfqComponent } from './body/dashboard/rfq/rfq.component';
const routes: Routes = [
  { path: 'new_matter_proposal', component: New_matter_proposalComponent },
  { path: 'request_for_quote', component: Request_for_quoteComponent },
  { path: 'revise_add', component: Revise_addComponent },
  { path: 'get_help', component: Get_helpComponent },
  { path: 'matter', component: MatterComponent },
  { path: 'matter_revision', component: Matter_revisionComponent },
  { path: 'rfq', component: RfqComponent },
  { path: '', redirectTo: '/new_matter_proposal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
