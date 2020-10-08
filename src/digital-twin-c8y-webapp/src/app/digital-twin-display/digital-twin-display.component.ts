import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { DigitalTwinDataService } from '../digital-twin-data.service';

@Component({
  selector: 'app-digital-twin-display',
  templateUrl: './digital-twin-display.component.html',
  styleUrls: ['./digital-twin-display.component.css']
})
export class DigitalTwinDisplayComponent implements OnInit {
  data: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DigitalTwinDataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(map(_params => _params.get('id')),
      switchMap(_id => {
        return this.dataService.getAssetAdminShellEnv(_id as string);
      })).subscribe(_shell => {
        console.log('shell received ', _shell);
        this.data = _shell;
      });
  }

}
