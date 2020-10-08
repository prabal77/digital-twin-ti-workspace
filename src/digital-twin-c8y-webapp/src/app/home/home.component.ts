import { Component, OnInit } from '@angular/core';
import { DigitalTwinDataService } from '../digital-twin-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data: any[];
  constructor(private dataService: DigitalTwinDataService) { }

  ngOnInit() {
    this.dataService.getDigitalTwinModeList().subscribe(_m => {
      console.log(_m); this.data = _m;
    });
  }


}
