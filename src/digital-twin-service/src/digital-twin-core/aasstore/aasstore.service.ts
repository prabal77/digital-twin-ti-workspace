import { Injectable } from '@nestjs/common';
import { Asset, AssetAdministrationShell, AssetAdministrationShellEnv, ConceptDescription, Submodel } from 'i40-aas-objects';
import { Reference } from 'i40-aas-objects/dist/src/baseClasses/Reference';
import { AssetKindEnum } from 'i40-aas-objects/dist/src/types/AssetKindEnum';
import { KindEnum } from 'i40-aas-objects/dist/src/types/KindEnum';

@Injectable()
export class AasstoreService {

    private aasEnvList;
    private aasDict;
    private submodelDict;
    private assetDict;
    private conceptDict;

    constructor() {
        this.cleanup();
    }

    public cleanup() {
        this.aasEnvList = [];
        this.aasDict = new Map<string, AssetAdministrationShell>();
        this.submodelDict = new Map<string, Submodel>();
        this.assetDict = new Map<string, Asset>();
        this.conceptDict = new Map<string, ConceptDescription>();
    }

    public addAASEnvObj(obj: AssetAdministrationShellEnv) {
        this.aasEnvList.push(obj);
    }

    private assertAASExists(id: string) {
        if (!this.aasDict.has(id)) {
            throw `AAS by ${id} does not exist`;
        }
    }

    public addAASObj(obj: AssetAdministrationShell) {
        const id = obj.identification.id;
        if (this.aasDict.has(id)) {
            throw "Entry already exists";
        }

        this.aasDict.set(id, obj);
    }

    public updateAASObj(id: string, obj: AssetAdministrationShell) {
        this.assertAASExists(id);
        this.aasDict.set(id, obj);
    }

    public getAllAASObjs(): AssetAdministrationShell[] {
        const l: AssetAdministrationShell[] = [];
        this.aasDict.forEach(x => { l.push(x) });
        return l;
    }

    public getAASByCategory(categoryName: string): AssetAdministrationShell[] {
        if (categoryName === undefined || categoryName === null || categoryName === '') {
            return this.getAllAASObjs();
        } else {
            return Array.from(this.aasDict.values())
                .filter(_aas => {
                    return _aas.category !== undefined && _aas.category.toLocaleLowerCase().includes(categoryName.toLocaleLowerCase())
                });
        }
    }

    // Filter list of admin shell by asset state as Instance
    public filterByInstances(list: AssetAdministrationShell[]) {
        return list.filter(_aas =>
            this.assetDict.has(_aas.asset.keys[0].value)
            && this.assetDict.get(_aas.asset.keys[0].value).kind === AssetKindEnum.Instance);
    }
    // Filter list of admin shell by Asset State as Template only
    public filterByTemplates(list: AssetAdministrationShell[]) {
        return list.filter(_aas =>
            !(this.assetDict.has(_aas.asset.keys[0].value)
                && this.assetDict.get(_aas.asset.keys[0].value).kind === AssetKindEnum.Instance));
    }

    public getAASObjByID(id: string): AssetAdministrationShell {
        this.assertAASExists(id);

        return this.aasDict.get(id);
    }

    public deleteAASObjById(id: string) {
        this.assertAASExists(id);
        this.aasDict.delete(id);
    }

    public addAASSubmodel(id: string, submodel: Reference): AssetAdministrationShell {
        this.assertAASExists(id);
        this.aasDict.get(id).addSubmodel(submodel);
        return this.aasDict.get(id);
    }

    public getAllAASSubmodels(id: string): Submodel[] {
        this.assertAASExists(id);
        return this.aasDict.get(id).submodels.map(x => this.submodelDict.get(x.keys[0].value));
    }

    public getAASSubmodel(aasID: string, submodelID: string): Submodel {
        this.assertAASExists(aasID);
        const submodel = this.aasDict.get(aasID).submodels.find(x => x.keys[0].value === submodelID);
        if (submodel === null || submodel === undefined) {
            throw `submodel ${submodelID} not found in aas ${aasID}`;
        }
        return this.submodelDict.get(submodelID);
    }

    public deleteAASSubmodelByID(aasID: string, submodelID: string) {
        this.assertAASExists(aasID);
        const submodels = this.aasDict.get(aasID).submodels.filter(x => x.keys[0].value !== submodelID);
        this.aasDict.get(aasID).setSubmodels(submodels);
    }

    private assertSubmodelExists(id: string) {
        if (!this.submodelDict.has(id)) {
            throw `Submodel by ${id} does not exist`;
        }
    }

    public addSubmodel(obj: Submodel) {
        const id = obj.identification.id;
        if (this.submodelDict.has(id)) {
            throw `Submodel by ${id} does already exists`;
        }

        this.submodelDict.set(id, obj);
    }

    public getAllSubmodels(): Submodel[] {
        const l: Submodel[] = [];
        this.submodelDict.forEach(x => l.push(x));
        return l;
    }

    public updateSubmodelById(id: string, obj: Submodel) {
        this.assertSubmodelExists(id);
        this.submodelDict.set(id, obj);
    }

    public getSubmodelByID(id: string): Submodel {
        this.assertSubmodelExists(id);
        return this.submodelDict.get(id);
    }

    public deleteSubmodelByID(id: string) {
        this.assertSubmodelExists(id);
        this.submodelDict.delete(id);
    }

    private assertAssetExists(id: string) {
        if (!this.assetDict.has(id)) {
            throw `Asset by ${id} does not exist`;
        }
    }

    public addAsset(obj: Asset) {
        const id = obj.identification.id;
        if (this.assetDict.has(id)) {
            throw `Asset by ${id} does already exists`;
        }

        this.assetDict.set(id, obj);
    }

    public getAllAssets(): Asset[] {
        const l: Asset[] = [];
        this.assetDict.forEach(x => l.push(x));
        return l;
    }

    public updateAssetById(id: string, obj: Asset) {
        this.assertAssetExists(id);
        this.assetDict.set(id, obj);
    }

    public getAssetByID(id: string): Asset {
        this.assertAssetExists(id);
        return this.assetDict.get(id);
    }

    public deleteAssetByID(id: string) {
        this.assertAssetExists(id);
        this.assetDict.delete(id);
    }

    private assertConceptDescriptionExists(id: string) {
        if (!this.conceptDict.has(id)) {
            throw `ConceptDescription by ${id} does not exist`;
        }
    }

    public addConceptDescription(obj: ConceptDescription) {
        const id = obj.identification.id;
        if (this.conceptDict.has(id)) {
            throw `ConceptDescription by ${id} does already exists`;
        }
        this.conceptDict.set(id, obj);
    }

    public getAllConceptDescriptions(): ConceptDescription[] {
        const l: ConceptDescription[] = [];
        this.conceptDict.forEach(x => l.push(x));
        return l;
    }

    public updateConceptDescriptionById(id: string, obj: ConceptDescription) {
        this.assertConceptDescriptionExists(id);
        this.conceptDict.set(id, obj);
    }

    public getConceptDescriptionByID(id: string): ConceptDescription {
        this.assertConceptDescriptionExists(id);
        return this.conceptDict.get(id);
    }

    public deleteConceptDescriptionByID(id: string) {
        this.assertConceptDescriptionExists(id);
        this.conceptDict.delete(id);
    }
}
