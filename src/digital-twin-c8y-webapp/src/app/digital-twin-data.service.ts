import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DigitalTwinDataService {

  constructor(private httpClient: HttpClient) { }

  public getDigitalTwinModeList(): Observable<any[]> {
    return this.httpClient.get('./assets/mock-data/digital-twin-models.json')
      // tslint:disable-next-line: no-string-literal
      .pipe(map(_d => {
        console.log(_d);
        return _d['assetAdministrationShellList'];
      }), catchError(err => {
        console.log(err);
        return [];
      }));
  }
}
