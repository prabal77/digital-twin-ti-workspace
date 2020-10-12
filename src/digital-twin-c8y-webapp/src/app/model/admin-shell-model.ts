import { AssetAdministrationShell, Submodel } from 'i40-aas-objects';
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
    public fromNodeKey: string;
    public toNodeKey: string;
    public fromNode: AssetAdministrationShell;
    public toNode: AssetAdministrationShell;

    constructor(data: RelationShipElement) {
        this.name = data.idShort;
        this.fromNodeKey = data.first.keys[0].value;
        this.toNodeKey = data.second.keys[0].value;
    }

}
