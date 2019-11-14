import { Component, OnInit } from '@angular/core';
import { MatterCreationService } from '../service/matter-creation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private mattercreationservice: MatterCreationService) { }

  ngOnInit() {

  }

}
