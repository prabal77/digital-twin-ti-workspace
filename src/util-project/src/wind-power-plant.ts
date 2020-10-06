import {
    Asset,
    AssetAdministrationShell, AssetAdministrationShellEnv,
    IdTypeEnum,

    Submodel
} from 'i40-aas-objects';
import { AssetKindEnum } from 'i40-aas-objects/dist/src/types/AssetKindEnum';
import { KindEnum } from 'i40-aas-objects/dist/src/types/KindEnum';
import { TModelTypeElements } from 'i40-aas-objects/dist/src/types/ModelTypeElementsEnum';

export class WindFarmPowerPlant {

    constructor(private parent: AssetAdministrationShellEnv) {
    }

    createAssetAdminShellEnv(): AssetAdministrationShellEnv {
        const asset = this.createAsset();
        // const submodels = [this.createIdentificationSubmodel(), this.createDocumentationSubmodel(), this.createTechnicalDataSubModel(), this.createOperationalDataSubModel()];
        const aas = this.createAssetAdminShell(asset, this.parent.submodels);
        aas.parent = this.parent.getAssetAdministrationShells()[0].getReference();

        const shellEnv = new AssetAdministrationShellEnv();
        shellEnv.addAsset(asset);
        shellEnv.addAssetAdministrationShell(aas);

        // for (let _m of submodels) {
        //     shellEnv.addSubmodel(_m);
        // }
        return shellEnv;
    }

    createAssetAdminShell(asset: Asset, submodels: Submodel[]): AssetAdministrationShell {
        const shell = new AssetAdministrationShell({ id: 'urn:admin-shell.io:aas:2:1:power-plant:1#001', idType: IdTypeEnum.IRI }, 'Wind farm power plant');
        shell.category = 'MODEL';
        shell.modelType = { name: 'AssetAdministrationShell' as TModelTypeElements };
        shell.setAsset(asset.getReference());
        for (let _m of submodels) {
            _m.kind = KindEnum.Instance;
            shell.addSubmodel(_m.getReference());
        }
        return shell;
    }

    createAsset(): Asset {
        const asset = new Asset({ id: 'urn:admin-shell.io:asset:2:1:power-plant:bosch:spwd#11#00012', idType: IdTypeEnum.IRI }, 'Bosch Wind farm power Plant');
        asset.kind = AssetKindEnum.Instance;
        asset.modelType = { name: 'Asset' as TModelTypeElements };
        return asset;
    }
}