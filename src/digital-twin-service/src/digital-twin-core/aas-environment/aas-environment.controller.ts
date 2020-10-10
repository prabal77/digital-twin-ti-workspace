import { Body, Controller, Post } from '@nestjs/common';
import { AssetAdministrationShellEnv } from 'i40-aas-objects';
import { AasstoreService } from '../aasstore/aasstore.service';
// import * as jsonld from 'jsonld';
// const jsonld = require('jsonld');

@Controller('aasenv')
export class AasEnvironmentController {
    constructor(private aasStoreService: AasstoreService) {
    }

    @Post()
    public async addAssestAdminShells(@Body() aasEnv: AssetAdministrationShellEnv) {
        try {
            const object = AssetAdministrationShellEnv.fromJSON(aasEnv);
            object.getConceptDescriptions().forEach(_cd => this.aasStoreService.addConceptDescription(_cd));
            object.getSubmodels().forEach(_m => this.aasStoreService.addSubmodel(_m));
            object.getAssets().forEach(_a => this.aasStoreService.addAsset(_a));
            object.getAssetAdministrationShells().forEach(_a => this.aasStoreService.addAASObj(_a));
            return object;
        } catch (error) {
            console.log('error parsing data ', aasEnv);
            console.log(error);
            return aasEnv;
        }
    }

}
