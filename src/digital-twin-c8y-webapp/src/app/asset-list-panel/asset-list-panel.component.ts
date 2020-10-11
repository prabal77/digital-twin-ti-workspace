import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssetAdministrationShell } from 'i40-aas-objects';

@Component({
  selector: 'app-asset-list-panel',
  templateUrl: './asset-list-panel.component.html',
  styleUrls: ['./asset-list-panel.component.css']
})
export class AssetListPanelComponent implements OnInit {

  @Input()
  assetList: AssetAdministrationShell[];

  @Output()
  selectedAsset = new EventEmitter<AssetAdministrationShell>();

  constructor() { }

  ngOnInit() {
  }

}
