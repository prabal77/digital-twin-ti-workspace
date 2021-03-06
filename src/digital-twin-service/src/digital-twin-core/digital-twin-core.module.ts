import { Module } from '@nestjs/common';
import { AasEnvironmentController } from './aas-environment/aas-environment.controller';
import { AasController } from './aas/aas.controller';
import { SubmodelController } from './submodel/submodel.controller';
import { ConceptDescriptionController } from './concept-description/concept-description.controller';
import { AssetController } from './asset/asset.controller';
import { AasProvider } from './providers/aas-provider';
import { AasEnvProvider } from './providers/aas-env-provider';
import { SubmodelProvider } from './providers/submodel-provider';
import { AssetProvider } from './providers/asset-provider';
import { ConceptDescriptionProvider } from './providers/concept-description-provider';
import { AasxPackage } from './providers/aasx-package';
import { AasxPackageController } from './aasx-package/aasx-package.controller';
import { AasstoreService } from './aasstore/aasstore.service';
import { HealthController } from './health/health.controller';
import { C8ylistenerService } from './c8ylistener.service';

@Module({
  controllers: [AasEnvironmentController, AasController, SubmodelController, ConceptDescriptionController, AssetController, AasxPackageController, HealthController],
  providers: [AasProvider, AasEnvProvider, SubmodelProvider, AssetProvider, ConceptDescriptionProvider, AasxPackage, AasstoreService, C8ylistenerService]
})
export class DigitalTwinCoreModule { }
