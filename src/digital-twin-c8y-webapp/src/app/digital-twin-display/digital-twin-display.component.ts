import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssetAdministrationShell } from 'i40-aas-objects';
import { combineLatest, from } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { LogicService } from '../logic.service';
import { DigitalTwinModelComplete, InteractionNodes } from '../model/admin-shell-model';
import { AdminShellEnvService } from '../services/admin-shell-env.service';

@Component({
  selector: 'app-digital-twin-display',
  templateUrl: './digital-twin-display.component.html',
  styleUrls: ['./digital-twin-display.component.css']
})
export class DigitalTwinDisplayComponent implements OnInit {
  shellObjectComplete: DigitalTwinModelComplete;
  assetDropDown = ['Templates', 'Instances'];
  assetSelectionFormControl = new FormControl('Templates');
  assetList: AssetAdministrationShell[];
  interactions: InteractionNodes[];

  constructor(private activatedRoute: ActivatedRoute,
              private adminShellService: AdminShellEnvService,
              private logicService: LogicService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(map(_params => _params.get('id')),
      switchMap(_id => {
        return combineLatest(this.adminShellService.getAssestAdminShellById(_id),
          this.adminShellService.getSubModelsForAAS(_id))
          .pipe(map(_array => new DigitalTwinModelComplete(_array[0], _array[1])));
      }),
      switchMap(_model => this.logicService.fetchAllSubAAS(_model)))
      .subscribe(_shellComplete => {
        console.log(_shellComplete);
        this.shellObjectComplete = _shellComplete;
        this.interactions = this.logicService.buildInteractionObjects(this.shellObjectComplete);
      });

    // get AAS list with category ASSET
    this.assetSelectionFormControl.valueChanges.pipe(switchMap(_val => {
      if (_val === 'Templates') {
        return this.adminShellService.getAssetAdminShellListByAsset(false);
      } else {
        return this.adminShellService.getAssetAdminShellListByAsset(true);
      }
    })).subscribe(_list => this.assetList = _list);

    // get initial list of assets
    from(this.adminShellService.getAssetAdminShellListByAsset(false)).pipe(take(1))
      .subscribe(_list => this.assetList = _list);
  }

  addAssetToModel(assetTemplate: AssetAdministrationShell) {

  }

}
