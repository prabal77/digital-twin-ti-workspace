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
        // console.log(JSON.stringify(aas, null, 3))

        const model = aas.getSubmodelsByIdShort('operationaldata')[0];
        const element: SubmodelElementCollection = model.getSubmodelElementByIdShort('input-lines') as SubmodelElementCollection;
//
        const thisObject: IReference = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'urn:admin-shell.io:aas:2:1:substation:1-002' }] };

        const inputPowerGrid: IReference = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'urn:admin-shell.io:aas:2:1:power-grid:1-001' }] };
        // const windFarm: IReference = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'urn:admin-shell.io:aas:2:1:wind-farm:1-001' }] };

        const city: IReference = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'urn:admin-shell.io:aas:2:1:power-consumer:city' }] };
        const factory: IReference = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'urn:admin-shell.io:aas:2:1:power-consumer:myFactory' }] };

        const Input1Ref = new RelationShipElement('feeds to', inputPowerGrid, thisObject, { name: 'RelationshipElement' }, undefined, KindEnum.Instance);
        // const Input2Ref = new RelationShipElement('feeds to', windFarm, thisObject, { name: 'RelationshipElement' }, undefined, KindEnum.Instance);

        const Out1Ref = new RelationShipElement('feeds to', thisObject, factory, { name: 'RelationshipElement' }, undefined, KindEnum.Instance);
        // const Out2Ref = new RelationShipElement('feeds to', thisObject, substation2, { name: 'RelationshipElement' }, undefined, KindEnum.Instance);

        element.addValue(Input1Ref);
        // element.addValue(Input2Ref);

        const element2: SubmodelElementCollection = model.getSubmodelElementByIdShort('output-lines') as SubmodelElementCollection;
        element2.addValue(Out1Ref);
        // element2.addValue(Out2Ref);

        console.log(JSON.stringify(aas, null, 3));

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