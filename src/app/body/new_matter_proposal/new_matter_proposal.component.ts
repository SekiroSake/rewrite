import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Matter} from '../../Model/Matter';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatterCreationService } from '../../service/matter-creation.service';

@Component({
  selector: 'app-new_matter_proposal',
  templateUrl: './new_matter_proposal.component.html',
  styleUrls: ['./new_matter_proposal.component.css']
})
export class New_matter_proposalComponent implements OnInit {
  matterForm: FormGroup;
  matterModel = new Matter('', '', '', '', '', '', '');
  startDatemodel: NgbDateStruct;
  endDatemodel: NgbDateStruct;
  startDate: {year: number, month: number, day: number};
  endDate: {year: number, month: number, day: number};
  firmCountries = ['', 'United State',
  'Afghanistan', 'Åland Islands'];
  matterTiers = ['', 'N/A',
  'Tier 1', 'Tier 2', 'Tier 3'];
  submitted = false;
  loading = false;
  matterid = '';
  onSubmit() {this.submitted = true; alert(JSON.stringify(this.matterModel));}
  get diagnostic() { return JSON.stringify(this.matterForm.value); }
  

  constructor(private calendar: NgbCalendar, private matter_creation_service: MatterCreationService) { }

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
    this.matterForm.value.lfeStartDate=this.stringifyDate(this.matterForm.value.lfeStartDate);
    this.matterForm.value.lfeEndDate=this.stringifyDate(this.matterForm.value.lfeEndDate);
    // console.log(JSON.stringify(this.matterForm.value));
    // alert(JSON.stringify(this.matterForm.value));
    // this.matter_creation_service.getCase().subscribe((data: any) =>{
    //   alert(JSON.stringify(data));
    // });
    this.creteMatterModel();
    this.submitted = true;
    this.loading = true;
    this.matter_creation_service.createMatter(this.matterModel)
    .subscribe((data: any) => {
      this.matterid = data;
      this.loading = false;
    });
  }

  stringifyDate(date): string{
    return date.year + '-' + date.month + '-' + date.day;
  }

  creteMatterModel(): Matter{
    this.matterModel.title = this.matterForm.value.title;
    this.matterModel.description = this.matterForm.value.description;
    this.matterModel.lfeStartDate = this.matterForm.value.lfeStartDate;
    this.matterModel.lfeEndDate = this.matterForm.value.lfeEndDate;
    this.matterModel.firmCountry = this.matterForm.value.firmCountry;
    this.matterModel.matterTier = this.matterForm.value.matterTier;
    this.matterModel.exceed100k = this.matterForm.value.exceed100k;
    return this.matterModel;
  }
}
