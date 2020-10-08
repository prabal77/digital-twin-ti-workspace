import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssetAdministrationShellEnv, Submodel } from 'i40-aas-objects';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DigitalTwinDataService {

  constructor(private httpClient: HttpClient) { }

  public getDigitalTwinModeList(): Observable<any[]> {
    return this.httpClient.get('./assets/mock-data/digital-twin-models.json')
      .pipe(map(_d => {
        // tslint:disable-next-line: no-string-literal
        return _d['assetAdministrationShellList'];
      }), catchError(err => {
        console.log(err);
        return [];
      }));
  }

  public getAssetAdminShellEnv(id: string): Observable<AssetAdministrationShellEnv> {
    let fileName = 'power-plant-aas.json';
    if (id.endsWith('wind-farm')) {
      fileName = 'wind-farm.json';
    } else if (id.endsWith('thermal-plant')) {
      fileName = 'thermal-plant.json';
    }
    return this.httpClient.get('./assets/mock-data/' + fileName)
      // tslint:disable-next-line: variable-name
      .pipe(map(_d => {
        console.log(_d);
        return _d as AssetAdministrationShellEnv;
        // tslint:disable-next-line: variable-name
      }), catchError(_err => {
        console.log(_err);
        return EMPTY;
      }));
  }

  public getSubModels(idList: string[]): Observable<Submodel[]> {

    return this.httpClient.get('./assets/mock-data/submodel-list.json')
      .pipe(map((_d: any) => {
        console.log(_d);
        // tslint:disable-next-line: variable-name
        return _d.submodelList as Submodel[];
      }), catchError(_err => {
        console.log(_err);
        return [];
      }));
  }
}
