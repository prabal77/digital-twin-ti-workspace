import { Component, OnInit } from '@angular/core';
import { DigitalTwinDataService } from '../digital-twin-data.service';
import { AdminShellEnvService } from '../services/admin-shell-env.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  twins: any[];
  constructor(private adminShellEnvService: AdminShellEnvService) { }

  async ngOnInit() {
    const data = (await this.adminShellEnvService.getData());
    console.log(data);
  }


}
