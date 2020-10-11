import { Component, Input, OnInit } from '@angular/core';
import { AdminShellComplete } from '../model/admin-shell-model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  @Input()
  assetInfo: AdminShellComplete;

  constructor() { }

  ngOnInit() {
  }

}
