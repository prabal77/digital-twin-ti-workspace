import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AssetAdministrationShell, Reference, Submodel } from 'i40-aas-objects';
import { identity } from 'rxjs';
import { AasstoreService } from 'src/aasstore/aasstore.service';

@Controller('aas')
export class AasController {
    constructor(private aasStoreService: AasstoreService) { }

    @Post()
    public postAAS(aas: AssetAdministrationShell) {
        this.aasStoreService.addAASObj(aas);
    }

    @Get()
    public getAAS(): { assetAdministrationShellList: AssetAdministrationShell[] } {
        return {
            assetAdministrationShellList: this.aasStoreService.getAllAASObjs()
        }
    }

    @Put(':id')
    public putAAS(@Param('id') id, aas: AssetAdministrationShell) {
        this.aasStoreService.updateAASObj(id, aas);
    }

    @Get(':id')
    public getAASByID(@Param('id') id): AssetAdministrationShell {
        return this.aasStoreService.getAASObjByShortId(id);
    }

    @Delete(':id')
    public deleteAASByID(@Param('id') id) {
        this.aasStoreService.deleteAASObjById(id);
    }

    @Post(':id/submodel')
    public postAASSubmodel(@Param('id') id, submodelRef: Reference) {
        this.aasStoreService.addAASSubmodel(id, submodelRef);
    }

    @Get(':id/submodel')
    public getAllAASSubmodel(@Param('id') id): { subModelList: Submodel[] } {
        return {
            subModelList: this.aasStoreService.getAllAASSubmodels(id)
        }
    }

    @Get(':id/submodel/:subid')
    public getAASSubmodelByID(@Param('id') id, @Param('subid') subid): Submodel {
        return this.aasStoreService.getAASSubmodel(id, subid);
    }

    @Delete(':id/submodel/:subid')
    public deleteAASSubmodelByID(@Param('id') id, @Param('subid') subid) {
        return this.aasStoreService.deleteAASSubmodelByID(id, subid);
    }
}
