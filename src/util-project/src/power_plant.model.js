"use strict";
exports.__esModule = true;
exports.PowerPlantModel = void 0;
var i40_aas_objects_1 = require("i40-aas-objects");
var AssetKindEnum_1 = require("i40-aas-objects/dist/src/types/AssetKindEnum");
var KindEnum_1 = require("i40-aas-objects/dist/src/types/KindEnum");
var PowerPlantModel = /** @class */ (function () {
    function PowerPlantModel() {
    }
    PowerPlantModel.prototype.createAssetAdminShellEnv = function () {
        var asset = this.createAsset();
        var submodels = [this.createIdentificationSubmodel(), this.createDocumentationSubmodel(), this.createTechnicalDataSubModel(), this.createOperationalDataSubModel()];
        var aas = this.createAssetAdminShell(asset, submodels);
        var shellEnv = new i40_aas_objects_1.AssetAdministrationShellEnv();
        shellEnv.addAsset(asset);
        shellEnv.addAssetAdministrationShell(aas);
        for (var _i = 0, submodels_1 = submodels; _i < submodels_1.length; _i++) {
            var _m = submodels_1[_i];
            shellEnv.addSubmodel(_m);
        }
        return shellEnv;
    };
    PowerPlantModel.prototype.createAssetAdminShell = function (asset, submodels) {
        var shell = new i40_aas_objects_1.AssetAdministrationShell({ id: 'urn:admin-shell.io:aas:2:1:power-plant', idType: "IRI" /* IRI */ }, 'power plant');
        shell.category = 'MODEL';
        shell.modelType = { name: 'AssetAdministrationShell' };
        shell.setAsset(asset.getReference());
        for (var _i = 0, submodels_2 = submodels; _i < submodels_2.length; _i++) {
            var _m = submodels_2[_i];
            shell.addSubmodel(_m.getReference());
        }
        return shell;
    };
    PowerPlantModel.prototype.createAsset = function () {
        var asset = new i40_aas_objects_1.Asset({ id: 'urn:admin-shell.io:asset:2:1:power-plant:bosch', idType: "IRI" /* IRI */ }, 'Bosch Electric Power Plant');
        asset.kind = AssetKindEnum_1.AssetKindEnum.Type;
        asset.modelType = { name: 'Asset' };
        return asset;
    };
    /**
     * Creates Identification Submodel for power plant.
     * If ID, parameter is passed, then submodel returned will be of Type instance
     *
     */
    PowerPlantModel.prototype.createIdentificationSubmodel = function (id) {
        var submodel = new i40_aas_objects_1.Submodel({ idType: "IRI" /* IRI */, id: 'urn:admin-shell.io:identification:2:1' }, 'identification', {
            revision: '1',
            version: '1'
        }, undefined, undefined, undefined, [
            { language: 'en', text: 'Generic Electric power generator plant' }
        ], 'CONSTANT', undefined, undefined, KindEnum_1.KindEnum.Template);
        if (id !== undefined) {
            submodel.kind = KindEnum_1.KindEnum.Instance;
            submodel.identification.id = submodel.identification.id.concat(':' + id);
        }
        submodel.modelType = { name: 'Submodel' };
        return submodel;
    };
    /**
     * Creates a Documentation Submodel Object
     * @param isInstance
     */
    PowerPlantModel.prototype.createDocumentationSubmodel = function (isInstance) {
        var subModel = new i40_aas_objects_1.Submodel({ idType: "IRI" /* IRI */, id: 'urn:admin-shell.io:documentation:2:1' }, 'documentation', {
            revision: '1',
            version: '1'
        }, undefined, undefined, undefined, [
            { language: 'en', text: 'Documentation describing Power plant layout and other stuff' }
        ], 'CONSTANT', undefined, undefined, KindEnum_1.KindEnum.Template);
        if (isInstance) {
            subModel.identification.id = subModel.identification.id + ':' + Math.random();
            subModel.kind = KindEnum_1.KindEnum.Instance;
        }
        subModel.modelType = { name: 'Submodel' };
        return subModel;
    };
    /**
     * Creates Technical Data Submodel object
     */
    PowerPlantModel.prototype.createTechnicalDataSubModel = function () {
        var subModel = new i40_aas_objects_1.Submodel({ idType: "IRI" /* IRI */, id: 'urn:admin-shell.io:technicaldata:2:1:#001' }, 'techicaldata', {
            revision: '1',
            version: '1'
        }, undefined, undefined, undefined, [
            { language: 'en', text: 'Technical Data Submodel' }
        ], 'CONSTANT', undefined, undefined, KindEnum_1.KindEnum.Instance);
        // maximum power output capacity
        var maxCapacitySubModelElement = new i40_aas_objects_1.Property('maximum power output', i40_aas_objects_1.AnyAtomicTypeEnum.long, undefined, {
            keys: [
                { idType: "IRDI" /* IRDI */, value: '0173-1#02-AAW133#002', type: 'GlobalReference', local: false }
            ]
        });
        maxCapacitySubModelElement.kind = KindEnum_1.KindEnum.Instance;
        subModel.addSubmodelElement(maxCapacitySubModelElement);
        subModel.modelType = { name: 'Submodel' };
        return subModel;
    };
    /**
     * Create Opetaion Data Submodel Template
     * @param id
     */
    PowerPlantModel.prototype.createOperationalDataSubModel = function () {
        var subModel = new i40_aas_objects_1.Submodel({ idType: "IRI" /* IRI */, id: 'urn:admin-shell.io:operationaldata:2:1' }, 'operationaldata', {
            revision: '1',
            version: '1'
        });
        subModel.setSemanticId({ keys: [{ idType: "IRI" /* IRI */, local: false, type: 'Submodel', value: 'http://admin-shell.io/sandbox/technical-data-flat/sm' }] });
        subModel.description = [
            { language: 'en', text: 'Operational Data of the Power Plant' }
        ];
        subModel.category = 'CONSTANT';
        subModel.kind = KindEnum_1.KindEnum.Template;
        var stateRun = {
            modelType: { name: 'Qualifier' },
            qualifierType: 'state', qualifierValue: undefined,
            qualifierValueId: { keys: [{ idType: "IRI" /* IRI */, local: false, type: 'Qualifier', value: 'http://admin-shell.io/sandbox/qualifier/state' }] }
        };
        subModel.qualifiers = [stateRun];
        // maximum power output capacity
        var maxCapacitySubModelElement = new i40_aas_objects_1.Property('maximum power output', i40_aas_objects_1.AnyAtomicTypeEnum.long, undefined, {
            keys: [
                { idType: "IRDI" /* IRDI */, value: '0173-1#02-AAW133#002', type: 'GlobalReference', local: false }
            ]
        });
        maxCapacitySubModelElement.kind = KindEnum_1.KindEnum.Template;
        // current electric power output
        var powerOutputSubModelElement = new i40_aas_objects_1.Property('Power output', i40_aas_objects_1.AnyAtomicTypeEnum.long, undefined, {
            keys: [
                { idType: "IRDI" /* IRDI */, value: '0173-1#02-BAC545#006', type: 'GlobalReference', local: false }
            ]
        });
        powerOutputSubModelElement.kind = KindEnum_1.KindEnum.Template;
        // child power generators
        var childGenerators = new i40_aas_objects_1.SubmodelElementCollection('generators', [], true, false, { keys: [{ idType: "IRDI" /* IRDI */, local: false, type: 'GlobalReference', value: '21051700' }] });
        childGenerators.kind = KindEnum_1.KindEnum.Template;
        subModel.addSubmodelElement(maxCapacitySubModelElement);
        subModel.addSubmodelElement(powerOutputSubModelElement);
        subModel.addSubmodelElement(childGenerators);
        subModel.modelType = { name: 'Submodel' };
        return subModel;
    };
    return PowerPlantModel;
}());
exports.PowerPlantModel = PowerPlantModel;
