import { Injectable } from '@nestjs/common';
import { AssetAdministrationShell } from 'i40-aas-objects';
import { Observable, of } from 'rxjs';

@Injectable()
export class AasProvider {

    public addAssetAdminShell(aasObject: AssetAdministrationShell): AssetAdministrationShell {
        console.log(aasObject);
        return aasObject;
    }

    public getAllAssetAdminShells(): Observable<AssetAdministrationShell[]> {
        return of([]);
    }

    public getAssetAdminShellObject(aasId: String): Observable<AssetAdministrationShell> {
        return of(null);
    }

    public updateAssetAdminShellObject(aasId: String): Observable<AssetAdministrationShell> {
        return of(null);
    }

    public deleteAssetAdminShellObject(aasId: String): Observable<AssetAdministrationShell> {
        return of(null);
    }
 }
