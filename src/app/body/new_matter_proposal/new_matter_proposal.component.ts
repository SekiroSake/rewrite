import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Matter} from '../../Model/Matter';

@Component({
  selector: 'app-new_matter_proposal',
  templateUrl: './new_matter_proposal.component.html',
  styleUrls: ['./new_matter_proposal.component.css']
})
export class New_matter_proposalComponent implements OnInit {
  matterModel = new Matter(1,"","","","","","",false);
  model: NgbDateStruct;
  startDatemodel: NgbDateStruct;
  endDatemodel: NgbDateStruct;
  date: {year: number, month: number, day: number};
  startDate: {year: number, month: number, day: number};
  endDate: {year: number, month: number, day: number};
  firmCountries = ['', 'United State',
  'Afghanistan', 'Åland Islands'];
  matterTiers = ['', 'N/A',
  'Tier 1', 'Tier 2', 'Tier 3'];
  submitted = false;
  onSubmit() {this.submitted = true; alert(JSON.stringify(this.matterModel));}
  get diagnostic() { return JSON.stringify(this.matterModel); }

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
