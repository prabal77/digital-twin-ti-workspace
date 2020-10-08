"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
var i40_aas_objects_1 = require("i40-aas-objects");
var ReferenceElement_1 = require("i40-aas-objects/dist/src/referables/ReferenceElement");
var KindEnum_1 = require("i40-aas-objects/dist/src/types/KindEnum");
var power_plant_model_1 = require("./power_plant.model");
var wind_power_plant_1 = require("./wind-power-plant");
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.getQualifier = function () {
        var qualifier = [];
        qualifier.push({
            modelType: { name: "Qualifier" },
            qualifierType: '',
            qualifierValue: '',
            qualifierValueId: { keys: [{ idType: "IRI", local: false, type: i40_aas_objects_1.KeyElementsEnum.Qualifier, value: 'http://test.com/qualifier/state' }] }
        });
        return qualifier;
    };
    MyClass.prototype.createACGenerator = function () {
        /* Create a Submodel and add a new Property to it*/
        var myAssetIdentificationModel = i40_aas_objects_1.Submodel.fromJSON({
            identification: { id: 'http://test.com/submodel/id/identification123', idType: "IRDI" /* IRDI */ },
            idShort: 'identification123'
        }).addSubmodelElement(new i40_aas_objects_1.Property('ManufacturerName', i40_aas_objects_1.AnyAtomicTypeEnum.string, 'SAP SE', undefined, new i40_aas_objects_1.Reference({
            keys: [
                {
                    local: false,
                    type: i40_aas_objects_1.KeyElementsEnum.GlobalReference,
                    idType: "IRDI" /* IRDI */,
                    value: '0173-1#02-AAO677#002'
                },
            ]
        })));
        /* Create an asset and add a reference to the previously created submodel as it assetIdentificationModel*/
        var myAsset = new i40_aas_objects_1.Asset({ id: 'http://test.com/asset/123', idType: "IRDI" /* IRDI */ }, '123').setAssetIdentificationModel(myAssetIdentificationModel.getReference());
        /* Create an AAS and add a reference to the previously created asset as its asset*/
        var myAas = new i40_aas_objects_1.AssetAdministrationShell({ id: 'http://test.com/aas/id/aas123', idType: "IRDI" /* IRDI */ }, 'identification123').setAsset(myAsset.getReference());
        /* Create an environment and add all identifiables */
        var myNewAasEnv = new i40_aas_objects_1.AssetAdministrationShellEnv()
            .addAssetAdministrationShell(myAas)
            .addAsset(myAsset)
            .addSubmodel(myAssetIdentificationModel);
        return myNewAasEnv;
    };
    MyClass.prototype.getInputLines = function () {
        return new ReferenceElement_1.ReferenceElement('Thermal_Plant');
    };
    MyClass.prototype.getSubmodelPowerGrid = function () {
        var submodel = i40_aas_objects_1.Submodel.fromJSON({
            identification: { idType: "IRI" /* IRI */, id: 'http://test.com/submodel/power-grid/operation_data' },
            qualifiers: this.getQualifier(),
            modelType: { name: "Submodel" },
            idShort: 'Operation Data',
            category: 'CONSTANT',
            description: [{ language: 'en', text: 'Operation Data submodel template for power grid' }],
            administration: { version: '1', revision: '10' },
            kind: KindEnum_1.KindEnum.Template,
            semanticId: undefined
        });
        // Max capacity
        submodel.addSubmodelElement(new i40_aas_objects_1.Property('Max_Capacity', i40_aas_objects_1.AnyAtomicTypeEnum.long, '25000', new i40_aas_objects_1.Reference({
            keys: [
                {
                    local: false,
                    type: i40_aas_objects_1.KeyElementsEnum.GlobalReference,
                    idType: "IRDI" /* IRDI */,
                    value: '0173-1#02-AAO677#002'
                }
            ]
        }), undefined, KindEnum_1.KindEnum.Template, undefined, undefined, [{ language: 'en', text: 'Maximum capacity of the Power grid in KWH' }], 'CONSTANT', undefined));
        // Power Output
        submodel.addSubmodelElement(new i40_aas_objects_1.Property('Power_Output', i40_aas_objects_1.AnyAtomicTypeEnum.long, '25000', new i40_aas_objects_1.Reference({
            keys: [
                {
                    local: false,
                    type: i40_aas_objects_1.KeyElementsEnum.GlobalReference,
                    idType: "IRDI" /* IRDI */,
                    value: '0173-1#02-AAO677#002'
                }
            ]
        }), undefined, KindEnum_1.KindEnum.Template, undefined, undefined, [{ language: 'en', text: 'Current Power Output of the Power Grid' }], 'VARIABLE', undefined));
        // Input lines
        // submodel.addSubmodelElement(new SubmodelElementCollection('input_lines', [new]))
        // Output lines
        submodel.addSubmodelElement(new i40_aas_objects_1.Property('Input_Lines', i40_aas_objects_1.AnyAtomicTypeEnum.long, '25000', new i40_aas_objects_1.Reference({
            keys: [
                {
                    local: false,
                    type: i40_aas_objects_1.KeyElementsEnum.GlobalReference,
                    idType: "IRDI" /* IRDI */,
                    value: '0173-1#02-AAO677#002'
                }
            ]
        }), undefined, KindEnum_1.KindEnum.Template, undefined, undefined, [{ language: 'en', text: 'Maximum capacity of the Power grid in KWH' }], 'VARIABLE', undefined));
        return submodel;
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var c = new MyClass();
var plant = new power_plant_model_1.PowerPlantModel();
var powerPlantEnv = plant.createAssetAdminShellEnv();
var plant2 = new wind_power_plant_1.WindFarmPowerPlant(powerPlantEnv);
var shell = plant2.createAssetAdminShellEnv();
// console.log(JSON.stringify(shell, null, 3));
var a = shell.getInstance({
    keys: [{
            type: 'AssetAdministrationShell', value: 'asdads', idType: "IRI" /* IRI */,
            local: false
        }]
});
console.log(JSON.stringify(a, null, 3));
var run = function () {
    /* Create a Submodel and add a new Property to it*/
    var myAssetIdentificationModel = i40_aas_objects_1.Submodel.fromJSON({
        identification: { id: 'http://test.com/submodel/id/identification123', idType: "IRDI" /* IRDI */ },
        idShort: 'identification123'
    }).addSubmodelElement(new i40_aas_objects_1.Property('ManufacturerName', i40_aas_objects_1.AnyAtomicTypeEnum.string, 'SAP SE', undefined, new i40_aas_objects_1.Reference({
        keys: [
            {
                local: false,
                type: i40_aas_objects_1.KeyElementsEnum.GlobalReference,
                idType: "IRDI" /* IRDI */,
                value: '0173-1#02-AAO677#002'
            },
        ]
    })));
    /* Create an asset and add a reference to the previously created submodel as it assetIdentificationModel*/
    var myAsset = new i40_aas_objects_1.Asset({ id: 'http://test.com/asset/123', idType: "IRDI" /* IRDI */ }, '123').setAssetIdentificationModel(myAssetIdentificationModel.getReference());
    /* Create an AAS and add a reference to the previously created asset as its asset*/
    var myAas = new i40_aas_objects_1.AssetAdministrationShell({ id: 'http://test.com/aas/id/aas123', idType: "IRDI" /* IRDI */ }, 'identification123').setAsset(myAsset.getReference());
    /* Create an environment and add all identifiables */
    var myNewAasEnv = new i40_aas_objects_1.AssetAdministrationShellEnv()
        .addAssetAdministrationShell(myAas)
        .addAsset(myAsset)
        .addSubmodel(myAssetIdentificationModel);
    /* print the environment to the console */
    console.log(JSON.stringify(myNewAasEnv, null, 3));
};
// run();
