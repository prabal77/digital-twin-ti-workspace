import { Module } from '@nestjs/common';
import { AasController } from './controllers/aas/aas.controller';
import { AasenvironmentController } from './controllers/aasenvironment/aasenvironment.controller';
import { AssetController } from './controllers/asset/asset.controller';
import { ConceptdescriptionController } from './controllers/conceptdescription/conceptdescription.controller';
import { SubmodelController } from './controllers/submodel/submodel.controller';
import { AasEnvProvider } from './providers/aas-env-provider';
import { AasProvider } from './providers/aas-provider';
import { AssetDataProvider } from './providers/asset-data-provider';
import { SubmodelProvider } from './providers/submodel-provider';
import { ConceptDescriptionProvider } from './providers/concept-description-provider';

@Module({
  controllers: [AasController, SubmodelController, AssetController, ConceptdescriptionController, AasenvironmentController],
  providers: [AasEnvProvider, AasProvider, AssetDataProvider, SubmodelProvider, ConceptDescriptionProvider]
})
export class DigitalTwinRepoModule { }
