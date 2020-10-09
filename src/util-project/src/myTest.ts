import {
    AnyAtomicTypeEnum, Asset,
    AssetAdministrationShell, AssetAdministrationShellEnv,
    IdTypeEnum,
    KeyElementsEnum, Property,
    Reference, Submodel,
    SubmodelElement, SubmodelElementCollection
} from 'i40-aas-objects';
import { IQualifier } from 'i40-aas-objects/dist/src/baseClasses/Qualifier';
import { ReferenceElement } from 'i40-aas-objects/dist/src/referables/ReferenceElement';
import { RelationShipElement } from 'i40-aas-objects/dist/src/referables/RelationshipElement';
import { KindEnum } from 'i40-aas-objects/dist/src/types/KindEnum';
import { PowerPlantModel } from './power_plant.model';
import { Test2 } from './Test2';
import { WindFarmPowerPlant } from './wind-power-plant';


const t = new Test2();
t.run();
// console.log(JSON.stringify(t.getSubModel(), null));


