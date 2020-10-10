import { AssetAdministrationShell, AssetAdministrationShellEnv, Submodel, SubmodelElementCollection } from "i40-aas-objects";
import { readFileSync } from 'fs';
import { ReferenceElement } from "i40-aas-objects/dist/src/referables/ReferenceElement";
import { RelationShipElement } from "i40-aas-objects/dist/src/referables/RelationshipElement";
import { IReference } from "i40-aas-objects/dist/src/baseClasses/Reference";
import { KindEnum } from "i40-aas-objects/dist/src/types/KindEnum";

export class Test2 {

    private base: string = '/home/prabal/workspace/digital-twin-ti-workspace/samples/new/';

    run() {
        // this.getSubModel();
        // this.getAAS();
        this.get();
    }

    get() {
        // const content = readFileSync(this.base + 'instance-1-power-grid.json', 'utf8');
        const b = '/home/prabal/workspace/digital-twin-ti-workspace/src/util-project/src/';
        const content = readFileSync(b + 'test.json', 'utf8');
        const aas = AssetAdministrationShellEnv.fromJSON(JSON.parse(content));

        const model = aas.getSubmodelsByIdShort('operationaldata')[0];
        // model.addSubmodelElement(new SubmodelElementCollection('input-lines', []));
        const first: IReference = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'value' }] };
        const second: IReference = { keys: [{ idType: 'IRDI', type: 'AssetAdministrationShell', local: false, value: 'qweqwe' }] };
        (model.getSubmodelElementByIdShort('input-lines') as SubmodelElementCollection)
            .addValue(new RelationShipElement('feeds to', first, second, { name: 'RelationshipElement' },
                undefined, KindEnum.Instance));
        console.log(JSON.stringify(aas, null, 3))
    }

    getSubModel() {
        const b = '/home/prabal/workspace/digital-twin-ti-workspace/src/util-project/src/';
        const model = Submodel.fromJSON(JSON.parse(readFileSync(b + 'test.json', 'utf-8')));
        // const a = model.getSubmodelElementByIdShort('connections');
        const first: IReference = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'value' }] };
        const second: IReference = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'qweqwe' }] };
        const thrid: IReference = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'thrid' }] };
        const forth: IReference = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'forth' }] };

        model.addSubmodelElement(new RelationShipElement('feeds to', first, second, { name: 'RelationshipElement' }, undefined, KindEnum.Instance));
        model.addSubmodelElement(new RelationShipElement('feeds to', thrid, forth, { name: 'RelationshipElement' }, undefined, KindEnum.Instance));
        // console.log(model.toJSON());
        console.log(JSON.stringify(model, null, 3))
    }

    getAAS() {
        const aas = AssetAdministrationShellEnv.fromJSON(JSON.parse(readFileSync(this.base + 'instance-1-power-distribution.json', 'utf-8')));
        console.log(JSON.stringify(aas, null, 3));
    }

}