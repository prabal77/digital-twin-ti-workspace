import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetAdministrationShellEnv } from 'i40-aas-objects';
import { AasEnvProvider } from 'src/digital-twin-repo/providers/aas-env-provider';


/**
 * REST end point to path "service/aasenv"
 */
@Controller('aasenv')
export class AasenvironmentController {

    constructor(private aasEnvProvider: AasEnvProvider) {
    }

    /**
     * Accept aas details from aasEnv object
     * @param aasEnv 
     */
    @Post()
    public addAssetAdminShellEnvironment(@Body() aasEnv: AssetAdministrationShellEnv): AssetAdministrationShellEnv {
        this.aasEnvProvider.saveAssetAdminShellEnvObject(aasEnv);
        return aasEnv;
    }

    @Get()
    public getAllAssetAdminShellEnvironemnt(): AssetAdministrationShellEnv {
        return this.aasEnvProvider.getAllAASTemplates();
    }
}
