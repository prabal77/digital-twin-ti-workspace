import { Injectable } from '@angular/core';
import { FetchClient } from '@c8y/ngx-components/api';
import { AssetAdministrationShell, Submodel } from 'i40-aas-objects';

@Injectable({
  providedIn: 'root'
})
export class AdminShellEnvService {
  private static readonly options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  private readonly baseURL = '/service/twin/';

  constructor(private fetchClient: FetchClient) {
  }

  /**
   * Get list of Asset Admin Shell by category 'Model'
   */
  async getAssetAdminShellListByModel(getInstances: boolean = true): Promise<AssetAdministrationShell[]> {
    const response = await this.fetchClient.fetch(
      this.baseURL + 'aas/' + (getInstances ? 'instances' : 'templates') + '?category=model', AdminShellEnvService.options);
    if (response.status === 200) {
      return (await response.json()).assetAdministrationShellList as AssetAdministrationShell[];
    } else {
      return [];
    }
  }

  /**
   * Get list of Asset Admin Shell by category 'Asset'
   */
  async getAssetAdminShellListByAsset(getInstances: boolean = true): Promise<AssetAdministrationShell[]> {
    const response = await this.fetchClient.fetch(
      this.baseURL + 'aas/' + (getInstances ? 'instances' : 'templates') + '?category=ASSET', AdminShellEnvService.options);
    if (response.status === 200) {
      return (await response.json()).assetAdministrationShellList as AssetAdministrationShell[];
    } else {
      return [];
    }
  }

  /**
   * Get AssetAdminShell Object by ID
   * @param id 
   */
  async getAssestAdminShellById(id: string): Promise<AssetAdministrationShell> {
    const response = await this.fetchClient.fetch(
      this.baseURL + 'aas/' + id, AdminShellEnvService.options);
    if (response.status === 200) {
      return (await response.json());
    } else {
      return null;
    }
  }

  /**
   * Get all submodels of the passed AAS id
   * @param aasId 
   */
  async getSubModelsForAAS(aasId: string): Promise<Submodel[]> {
    const response = await this.fetchClient.fetch(
      this.baseURL + 'aas/' + aasId + '/submodel', AdminShellEnvService.options);
    if (response.status === 200) {
      return (await response.json()).subModelList as Submodel[];
    } else {
      return [];
    }
  }

}
