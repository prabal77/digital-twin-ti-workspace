import { Component, OnInit } from '@angular/core';
import { DigitalTwinDataService } from '../digital-twin-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  twins: any[];
  constructor(private dataService: DigitalTwinDataService) { }

  ngOnInit() {
    this.dataService.getDigitalTwinModeList().subscribe(_d => {
      console.log('received data ', _d);
      this.twins = _d;
    });
  }


}
