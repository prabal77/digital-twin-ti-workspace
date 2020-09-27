import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AssetAdministrationShell } from 'i40-aas-objects';
import { Observable } from 'rxjs';
import { AasProvider } from 'src/digital-twin-repo/providers/aas-provider';

@Controller('aas')
export class AasController {
    constructor(private assProvider: AasProvider) { }

    @Post()
    public addAssetAdminShellObject(@Body() aasObject: AssetAdministrationShell): AssetAdministrationShell {
        return this.assProvider.addAssetAdminShell(aasObject);
    }

    @Get()
    public getAllAssetAdminShellObjects(): Observable<AssetAdministrationShell[]> {
        return this.assProvider.getAllAssetAdminShells();
    }

    @Get(':id')
    public getAssetAdminShell(aasId: String): Observable<AssetAdministrationShell>{
        return this.assProvider.getAssetAdminShellObject(aasId);
    }

    @Put(':id')
    public updateAssetAdminShell(aasId: String): Observable<AssetAdministrationShell> {
        return this.assProvider.updateAssetAdminShellObject(aasId);
    }

    @Delete(':id')
    public deleteAssetAdminShellObject(aasId: String): Observable<AssetAdministrationShell> {
        return this.assProvider.deleteAssetAdminShellObject(aasId);
    }
}
