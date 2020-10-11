import { AssetAdministrationShell, Submodel } from 'i40-aas-objects';
import { Key } from 'i40-aas-objects/dist/src/baseClasses/Key';
import { RelationShipElement } from 'i40-aas-objects/dist/src/referables/RelationshipElement';

export class AdminShellComplete {
    public submodels: Map<string, Submodel> = new Map();

    constructor(public shell: AssetAdministrationShell, submodels: Submodel[]) {
        submodels.forEach(_m => this.submodels.set(_m.idShort, _m));
    }
}

export class DigitalTwinModelComplete extends AdminShellComplete {

    constructor(public shell: AssetAdministrationShell, submodels: Submodel[]) {
        super(shell, submodels);
    }

    getInteractions(): RelationShipElement[] {
        return (this.submodels.get('Interactions') as Submodel).submodelElements as RelationShipElement[];
    }
}

export class InteractionNodes {
    public name: string;
    public fromNodeKey: Key;
    public toNodeKey: Key;
    public fromNode: AssetAdministrationShell;
    public toNode: AssetAdministrationShell;

    constructor(data: RelationShipElement) {
        this.name = data.idShort;
        this.fromNodeKey = data.first[0];
        this.toNodeKey = data.second[0];
    }

}
