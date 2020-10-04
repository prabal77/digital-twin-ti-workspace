import { Controller, Post } from '@nestjs/common';
import { AssetAdministrationShellEnv, validate } from 'i40-aas-objects';
import { AasEnvProvider } from '../providers/aas-env-provider';
// import * as jsonld from 'jsonld';
const jsonld = require('jsonld');

@Controller('aasenv')
export class AasEnvironmentController {
    constructor(private aasenvProvider: AasEnvProvider) {
    }

    @Post()
    public async addAssestAdminShells(aasEnv: AssetAdministrationShellEnv) {
        validate(aasEnv);
        const flattened = await jsonld.flatten(aasEnv);
        console.log(flattened);
    }
}
