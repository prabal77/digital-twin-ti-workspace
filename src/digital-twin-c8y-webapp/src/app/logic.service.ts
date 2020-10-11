import { Injectable } from '@angular/core';
import { AssetAdministrationShell } from 'i40-aas-objects';
import { DigitalTwinModelComplete, InteractionNodes } from './model/admin-shell-model';
import { AdminShellEnvService } from './services/admin-shell-env.service';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
  public adminShellCache: Map<string, AssetAdministrationShell> = new Map();

  constructor(private adminShellService: AdminShellEnvService) { }

  /**
   * Fetch all AAS objects from server and store in the cache
   * @param digitalTwinModel 
   */
  public async fetchAllSubAAS(digitalTwinModel: DigitalTwinModelComplete) {
    digitalTwinModel.getInteractions().forEach(_relationNode => {
      if (!this.adminShellCache.has(_relationNode.first.keys[0].value)) {
        this.adminShellCache.set(_relationNode.first.keys[0].value, null);
      }
      if (!this.adminShellCache.has(_relationNode.second.keys[0].value)) {
        this.adminShellCache.set(_relationNode.second.keys[0].value, null);
      }
    });
    // fetch Admin Shells from server
    const promiseArray = [];
    this.adminShellCache.forEach((_value, _key) => {
      if (_value === null) {
        promiseArray.push(this.adminShellService.getAssestAdminShellById(_key).then(_shell => {
          this.adminShellCache.set(_key, _shell);
        }));
      }
    });
    // wait for all the shells to fetch
    await Promise.all(promiseArray);
    return digitalTwinModel;
  }

  public buildInteractionObjects(digitalTwinModel: DigitalTwinModelComplete): InteractionNodes[] {
    return digitalTwinModel.getInteractions().map(_rel => new InteractionNodes(_rel))
      .map(_n => {
        _n.fromNode = this.adminShellCache.get(_n.fromNodeKey.value);
        _n.toNode = this.adminShellCache.get(_n.toNodeKey.value);
        return _n;
      });
  }
}
