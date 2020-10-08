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
import { WindFarmPowerPlant } from './wind-power-plant';

export class MyClass {
    public getQualifier() {
        const qualifier: Array<IQualifier> = [];
        qualifier.push({
            modelType: { name: "Qualifier" },
            qualifierType: '',
            qualifierValue: '',
            qualifierValueId: { keys: [{ idType: "IRI", local: false, type: KeyElementsEnum.Qualifier, value: 'http://test.com/qualifier/state' }] }
        });
        return qualifier;
    }

    public createACGenerator(): AssetAdministrationShellEnv {
        /* Create a Submodel and add a new Property to it*/
        var myAssetIdentificationModel = Submodel.fromJSON({
            identification: { id: 'http://test.com/submodel/id/identification123', idType: IdTypeEnum.IRDI },
            idShort: 'identification123',
        }).addSubmodelElement(
            new Property(
                'ManufacturerName',
                AnyAtomicTypeEnum.string,
                'SAP SE',
                undefined,
                new Reference({
                    keys: [
                        {
                            local: false,
                            type: KeyElementsEnum.GlobalReference,
                            idType: IdTypeEnum.IRDI,
                            value: '0173-1#02-AAO677#002',
                        },
                    ],
                }),
            ),
        );
        /* Create an asset and add a reference to the previously created submodel as it assetIdentificationModel*/
        var myAsset = new Asset(
            { id: 'http://test.com/asset/123', idType: IdTypeEnum.IRDI },
            '123',
        ).setAssetIdentificationModel(myAssetIdentificationModel.getReference());

        /* Create an AAS and add a reference to the previously created asset as its asset*/
        var myAas = new AssetAdministrationShell(
            { id: 'http://test.com/aas/id/aas123', idType: IdTypeEnum.IRDI },
            'identification123',
        ).setAsset(myAsset.getReference());

        /* Create an environment and add all identifiables */
        var myNewAasEnv = new AssetAdministrationShellEnv()
            .addAssetAdministrationShell(myAas)
            .addAsset(myAsset)
            .addSubmodel(myAssetIdentificationModel);

        return myNewAasEnv;
    }

    public getInputLines(): ReferenceElement {
        return new ReferenceElement('Thermal_Plant',);
    }

    public getSubmodelPowerGrid(): Submodel {
        const submodel = Submodel.fromJSON({
            identification: { idType: IdTypeEnum.IRI, id: 'http://test.com/submodel/power-grid/operation_data' },
            qualifiers: this.getQualifier(),
            modelType: { name: "Submodel" },
            idShort: 'Operation Data',
            category: 'CONSTANT',
            description: [{ language: 'en', text: 'Operation Data submodel template for power grid' }],
            administration: { version: '1', revision: '10' },
            kind: KindEnum.Template,
            semanticId: undefined,
        });
        // Max capacity
        submodel.addSubmodelElement(new Property(
            'Max_Capacity', AnyAtomicTypeEnum.long, '25000', new Reference(
                {
                    keys: [
                        {
                            local: false,
                            type: KeyElementsEnum.GlobalReference,
                            idType: IdTypeEnum.IRDI,
                            value: '0173-1#02-AAO677#002',
                        }
                    ]
                }),
            undefined, KindEnum.Template, undefined, undefined, [{ language: 'en', text: 'Maximum capacity of the Power grid in KWH' }], 'CONSTANT', undefined
        ));
        // Power Output
        submodel.addSubmodelElement(new Property(
            'Power_Output', AnyAtomicTypeEnum.long, '25000', new Reference(
                {
                    keys: [
                        {
                            local: false,
                            type: KeyElementsEnum.GlobalReference,
                            idType: IdTypeEnum.IRDI,
                            value: '0173-1#02-AAO677#002',
                        }
                    ]
                }),
            undefined, KindEnum.Template, undefined, undefined, [{ language: 'en', text: 'Current Power Output of the Power Grid' }], 'VARIABLE', undefined
        ));
        // Input lines
        // submodel.addSubmodelElement(new SubmodelElementCollection('input_lines', [new]))
        // Output lines
        submodel.addSubmodelElement(new Property(
            'Input_Lines', AnyAtomicTypeEnum.long, '25000', new Reference(
                {
                    keys: [
                        {
                            local: false,
                            type: KeyElementsEnum.GlobalReference,
                            idType: IdTypeEnum.IRDI,
                            value: '0173-1#02-AAO677#002',
                        }
                    ]
                }),
            undefined, KindEnum.Template, undefined, undefined, [{ language: 'en', text: 'Maximum capacity of the Power grid in KWH' }], 'VARIABLE', undefined
        ));

        return submodel;
    }

}

const c = new MyClass();
const plant = new PowerPlantModel();
const powerPlantEnv = plant.createAssetAdminShellEnv();
const plant2 = new WindFarmPowerPlant(powerPlantEnv);
const shell = plant2.createAssetAdminShellEnv();
// console.log(JSON.stringify(shell, null, 3));

const a = shell.getInstance({
    keys: [{
        type: 'AssetAdministrationShell', value: 'asdads', idType: IdTypeEnum.IRI
        , local: false
    }]
})
console.log(JSON.stringify(a, null, 3));

var run = function () {
    /* Create a Submodel and add a new Property to it*/
    var myAssetIdentificationModel = Submodel.fromJSON({
        identification: { id: 'http://test.com/submodel/id/identification123', idType: IdTypeEnum.IRDI },
        idShort: 'identification123',
    }).addSubmodelElement(
        new Property(
            'ManufacturerName',
            AnyAtomicTypeEnum.string,
            'SAP SE',
            undefined,
            new Reference({
                keys: [
                    {
                        local: false,
                        type: KeyElementsEnum.GlobalReference,
                        idType: IdTypeEnum.IRDI,
                        value: '0173-1#02-AAO677#002',
                    },
                ],
            }),
        ),
    );
    /* Create an asset and add a reference to the previously created submodel as it assetIdentificationModel*/
    var myAsset = new Asset(
        { id: 'http://test.com/asset/123', idType: IdTypeEnum.IRDI },
        '123',
    ).setAssetIdentificationModel(myAssetIdentificationModel.getReference());

    /* Create an AAS and add a reference to the previously created asset as its asset*/
    var myAas = new AssetAdministrationShell(
        { id: 'http://test.com/aas/id/aas123', idType: IdTypeEnum.IRDI },
        'identification123',
    ).setAsset(myAsset.getReference());


    /* Create an environment and add all identifiables */
    var myNewAasEnv = new AssetAdministrationShellEnv()
        .addAssetAdministrationShell(myAas)
        .addAsset(myAsset)
        .addSubmodel(myAssetIdentificationModel);

    /* print the environment to the console */
    console.log(JSON.stringify(myNewAasEnv, null, 3));
};
// run();

