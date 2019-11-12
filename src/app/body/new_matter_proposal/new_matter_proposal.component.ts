import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Matter} from '../../Model/Matter';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new_matter_proposal',
  templateUrl: './new_matter_proposal.component.html',
  styleUrls: ['./new_matter_proposal.component.css']
})
export class New_matter_proposalComponent implements OnInit {
  matterForm: FormGroup;
  matterModel = new Matter(1,"","","","","","",false);
  startDatemodel: NgbDateStruct;
  endDatemodel: NgbDateStruct;
  startDate: {year: number, month: number, day: number};
  endDate: {year: number, month: number, day: number};
  firmCountries = ['', 'United State',
  'Afghanistan', 'Åland Islands'];
  matterTiers = ['', 'N/A',
  'Tier 1', 'Tier 2', 'Tier 3'];
  submitted = false;
  onSubmit() {this.submitted = true; alert(JSON.stringify(this.matterModel));}
  get diagnostic() { return JSON.stringify(this.matterForm.value); }

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    this.matterForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lfeStartDate: new FormControl(null),
      lfeEndDate: new FormControl(null),
      firmCountry: new FormControl(),
      matterTier: new FormControl(),
      exceed100k: new FormControl('no')
    }, this.dateValidator);
  }

  dateValidator(g: FormGroup){
    //g.get('lfeEndDate').value > g.get('lfeStartDate').value
    // const start = new Date(g.get('lfeEndDate').value);
    // const end = new Date(g.get('lfeEndDate').value);
    return  2 > 1 ? null : {'mismatch': true};
  }

  createMatter() {
    console.log(this.matterForm.value);
  }
}
