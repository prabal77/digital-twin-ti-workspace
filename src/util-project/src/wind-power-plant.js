"use strict";
exports.__esModule = true;
exports.WindFarmPowerPlant = void 0;
var i40_aas_objects_1 = require("i40-aas-objects");
var AssetKindEnum_1 = require("i40-aas-objects/dist/src/types/AssetKindEnum");
var WindFarmPowerPlant = /** @class */ (function () {
    function WindFarmPowerPlant(parent) {
        this.parent = parent;
    }
    WindFarmPowerPlant.prototype.createAssetAdminShellEnv = function () {
        var asset = this.createAsset();
        // const submodels = [this.createIdentificationSubmodel(), this.createDocumentationSubmodel(), this.createTechnicalDataSubModel(), this.createOperationalDataSubModel()];
        var aas = this.createAssetAdminShell(asset, this.parent.submodels);
        aas.parent = this.parent.getAssetAdministrationShells()[0].getReference();
        var shellEnv = new i40_aas_objects_1.AssetAdministrationShellEnv();
        shellEnv.addAsset(asset);
        shellEnv.addAssetAdministrationShell(aas);
        for (var _i = 0, submodels_1 = submodels; _i < submodels_1.length; _i++) {
            var _m = submodels_1[_i];
            shellEnv.addSubmodel(_m);
        }
        return shellEnv;
    };
    WindFarmPowerPlant.prototype.createAssetAdminShell = function (asset, submodels) {
        var shell = new i40_aas_objects_1.AssetAdministrationShell({ id: 'urn:admin-shell.io:aas:2:1:power-plant:1#001', idType: "IRI" /* IRI */ }, 'Wind farm power plant');
        shell.category = 'MODEL';
        shell.modelType = { name: 'AssetAdministrationShell' };
        shell.setAsset(asset.getReference());
        // for (let _m of submodels) {
        //     _m.kind = KindEnum.Instance;
        //     shell.addSubmodel(_m.getReference());
        // }
        return shell;
    };
    WindFarmPowerPlant.prototype.createAsset = function () {
        var asset = new i40_aas_objects_1.Asset({ id: 'urn:admin-shell.io:asset:2:1:power-plant:bosch:spwd#11#00012', idType: "IRI" /* IRI */ }, 'Bosch Wind farm power Plant');
        asset.kind = AssetKindEnum_1.AssetKindEnum.Instance;
        asset.modelType = { name: 'Asset' };
        return asset;
    };
    return WindFarmPowerPlant;
}());
exports.WindFarmPowerPlant = WindFarmPowerPlant;
