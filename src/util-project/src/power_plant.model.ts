import {
    AnyAtomicTypeEnum, Asset,
    AssetAdministrationShell, AssetAdministrationShellEnv,
    IdTypeEnum,
    KeyElementsEnum, Property,
    Reference, Submodel,
    SubmodelElement, SubmodelElementCollection
} from 'i40-aas-objects';
import { IConstraint } from 'i40-aas-objects/dist/src/baseClasses/Constraint';
import { IQualifier } from 'i40-aas-objects/dist/src/baseClasses/Qualifier';
import { AssetKindEnum } from 'i40-aas-objects/dist/src/types/AssetKindEnum';
import { KindEnum } from 'i40-aas-objects/dist/src/types/KindEnum';
import { TModelTypeElements } from 'i40-aas-objects/dist/src/types/ModelTypeElementsEnum';

export class PowerPlantModel {

    constructor() {
    }

    createAssetAdminShellEnv(): AssetAdministrationShellEnv {
        const asset = this.createAsset();
        const submodels = [this.createIdentificationSubmodel(), this.createDocumentationSubmodel(), this.createTechnicalDataSubModel(), this.createOperationalDataSubModel()];
        const aas = this.createAssetAdminShell(asset, submodels);
        const shellEnv = new AssetAdministrationShellEnv();
        shellEnv.addAsset(asset);
        shellEnv.addAssetAdministrationShell(aas);
        for (let _m of submodels) {
            shellEnv.addSubmodel(_m);
        }
        return shellEnv;
    }

    createAssetAdminShell(asset: Asset, submodels: Submodel[]): AssetAdministrationShell {
        const shell = new AssetAdministrationShell({ id: 'urn:admin-shell.io:aas:2:1:power-plant', idType: IdTypeEnum.IRI }, 'power plant');
        shell.category = 'MODEL';
        shell.modelType = { name: 'AssetAdministrationShell' as TModelTypeElements };
        shell.setAsset(asset.getReference());
        for (let _m of submodels) {
            shell.addSubmodel(_m.getReference());
        }
        return shell;
    }

    createAsset(): Asset {
        const asset = new Asset({ id: 'urn:admin-shell.io:asset:2:1:power-plant:bosch', idType: IdTypeEnum.IRI }, 'Bosch Electric Power Plant');
        asset.kind = AssetKindEnum.Type;
        asset.modelType = { name: 'Asset' as TModelTypeElements };
        return asset;
    }

    /**
     * Creates Identification Submodel for power plant.
     * If ID, parameter is passed, then submodel returned will be of Type instance
     * 
     */
    createIdentificationSubmodel(id?: string): Submodel {
        const submodel = new Submodel(
            { idType: IdTypeEnum.IRI, id: 'urn:admin-shell.io:identification:2:1' },
            'identification',
            {
                revision: '1',
                version: '1'
            },
            undefined,
            undefined,
            undefined,
            [
                { language: 'en', text: 'Generic Electric power generator plant' }
            ],
            'CONSTANT',
            undefined,
            undefined,
            KindEnum.Template);
        if (id !== undefined) {
            submodel.kind = KindEnum.Instance;
            submodel.identification.id = submodel.identification.id.concat(':' + id);
        }
        submodel.modelType = { name: 'Submodel' as TModelTypeElements };
        return submodel;
    }

    /**
     * Creates a Documentation Submodel Object
     * @param isInstance 
     */
    createDocumentationSubmodel(isInstance?: boolean): Submodel {
        const subModel = new Submodel(
            { idType: IdTypeEnum.IRI, id: 'urn:admin-shell.io:documentation:2:1' },
            'documentation',
            {
                revision: '1',
                version: '1'
            },
            undefined,
            undefined,
            undefined,
            [
                { language: 'en', text: 'Documentation describing Power plant layout and other stuff' }
            ],
            'CONSTANT',
            undefined,
            undefined,
            KindEnum.Template);
        if (isInstance) {
            subModel.identification.id = subModel.identification.id + ':' + Math.random();
            subModel.kind = KindEnum.Instance
        }
        subModel.modelType = { name: 'Submodel' as TModelTypeElements };
        return subModel;
    }

    /**
     * Creates Technical Data Submodel object
     */
    createTechnicalDataSubModel(): Submodel {
        const subModel = new Submodel(
            { idType: IdTypeEnum.IRI, id: 'urn:admin-shell.io:technicaldata:2:1:#001' },
            'techicaldata',
            {
                revision: '1',
                version: '1'
            },
            undefined,
            undefined,
            undefined,
            [
                { language: 'en', text: 'Technical Data Submodel' }
            ],
            'CONSTANT',
            undefined,
            undefined,
            KindEnum.Instance);
        // maximum power output capacity
        const maxCapacitySubModelElement = new Property('maximum power output', AnyAtomicTypeEnum.long, undefined,
            {
                keys: [
                    { idType: IdTypeEnum.IRDI, value: '0173-1#02-AAW133#002', type: 'GlobalReference' as TModelTypeElements, local: false }]
            });
        maxCapacitySubModelElement.kind = KindEnum.Instance;
        subModel.addSubmodelElement(maxCapacitySubModelElement);
        subModel.modelType = { name: 'Submodel' as TModelTypeElements };
        return subModel;
    }

    /**
     * Create Opetaion Data Submodel Template
     * @param id 
     */
    createOperationalDataSubModel(): Submodel {
        const subModel = new Submodel(
            { idType: IdTypeEnum.IRI, id: 'urn:admin-shell.io:operationaldata:2:1' },
            'operationaldata',
            {
                revision: '1',
                version: '1'
            });
        subModel.setSemanticId({ keys: [{ idType: IdTypeEnum.IRI, local: false, type: 'Submodel', value: 'http://admin-shell.io/sandbox/technical-data-flat/sm' }] });
        subModel.description = [
            { language: 'en', text: 'Operational Data of the Power Plant' }
        ];
        subModel.category = 'CONSTANT'
        subModel.kind = KindEnum.Template;
        const stateRun: IConstraint & IQualifier = {
            modelType: { name: 'Qualifier' },
            qualifierType: 'state', qualifierValue: undefined,
            qualifierValueId:
                { keys: [{ idType: IdTypeEnum.IRI, local: false, type: 'Qualifier', value: 'http://admin-shell.io/sandbox/qualifier/state' }] }
        };
        subModel.qualifiers = [stateRun];
        // maximum power output capacity
        const maxCapacitySubModelElement = new Property('maximum power output', AnyAtomicTypeEnum.long, undefined,
            {
                keys: [
                    { idType: IdTypeEnum.IRDI, value: '0173-1#02-AAW133#002', type: 'GlobalReference' as TModelTypeElements, local: false }]
            });
        maxCapacitySubModelElement.kind = KindEnum.Template;
        // current electric power output
        const powerOutputSubModelElement = new Property('Power output', AnyAtomicTypeEnum.long, undefined,
            {
                keys: [
                    { idType: IdTypeEnum.IRDI, value: '0173-1#02-BAC545#006', type: 'GlobalReference' as TModelTypeElements, local: false }]
            });
        powerOutputSubModelElement.kind = KindEnum.Template;
        // child power generators
        const childGenerators: SubmodelElementCollection = new SubmodelElementCollection('generators', [], true, false,
            { keys: [{ idType: IdTypeEnum.IRDI, local: false, type: 'GlobalReference' as TModelTypeElements, value: '21051700' }] })
        childGenerators.kind = KindEnum.Template;

        subModel.addSubmodelElement(maxCapacitySubModelElement);
        subModel.addSubmodelElement(powerOutputSubModelElement);
        subModel.addSubmodelElement(childGenerators);
        subModel.modelType = { name: 'Submodel' as TModelTypeElements };
        return subModel;
    }
}