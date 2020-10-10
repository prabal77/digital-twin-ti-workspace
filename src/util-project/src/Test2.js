"use strict";
exports.__esModule = true;
exports.Test2 = void 0;
var i40_aas_objects_1 = require("i40-aas-objects");
var fs_1 = require("fs");
var RelationshipElement_1 = require("i40-aas-objects/dist/src/referables/RelationshipElement");
var KindEnum_1 = require("i40-aas-objects/dist/src/types/KindEnum");
var Test2 = /** @class */ (function () {
    function Test2() {
        this.base = '/home/prabal/workspace/digital-twin-ti-workspace/samples/new/';
    }
    Test2.prototype.run = function () {
        // this.getSubModel();
        // this.getAAS();
        this.get();
    };
    Test2.prototype.get = function () {
        // const content = readFileSync(this.base + 'instance-1-power-grid.json', 'utf8');
        var b = '/home/prabal/workspace/digital-twin-ti-workspace/src/util-project/src/';
        var content = fs_1.readFileSync(b + 'test.json', 'utf8');
        var aas = i40_aas_objects_1.AssetAdministrationShellEnv.fromJSON(JSON.parse(content));
        var model = aas.getSubmodelsByIdShort('operationaldata')[0];
        // model.addSubmodelElement(new SubmodelElementCollection('input-lines', []));
        var first = { keys: [{ idType: 'IRI', type: 'AssetAdministrationShell', local: false, value: 'value' }] };
        var second = { keys: [{ idType: 'IRDI', type: 'AssetAdministrationShell', local: false, value: 'qweqwe' }] };
        model.getSubmodelElementByIdShort('input-lines')
            .addValue(new RelationshipElement_1.RelationShipElement('feeds to', first, second, { name: 'RelationshipElement' }, undefined, KindEnum_1.KindEnum.Instance));
        console.log(JSON.stringify(aas, null, 3));
    };
    Test2.prototype.getSubModel = function () {
        var b = '/home/prabal/workspace/digital-twin-ti-workspace/src/util-project/src/';
        var model = i40_aas_objects_1.Submodel.fromJSON(JSON.parse(fs_1.readFileSync(b + 'test.json', 'utf-8')));
        // const a = model.getSubmodelElementByIdShort('connections');
        var first = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'value' }] };
        var second = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'qweqwe' }] };
        var thrid = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'thrid' }] };
        var forth = { keys: [{ idType: 'IRDI', type: 'Submodel', local: false, value: 'forth' }] };
        model.addSubmodelElement(new RelationshipElement_1.RelationShipElement('feeds to', first, second, { name: 'RelationshipElement' }, undefined, KindEnum_1.KindEnum.Instance));
        model.addSubmodelElement(new RelationshipElement_1.RelationShipElement('feeds to', thrid, forth, { name: 'RelationshipElement' }, undefined, KindEnum_1.KindEnum.Instance));
        // console.log(model.toJSON());
        console.log(JSON.stringify(model, null, 3));
    };
    Test2.prototype.getAAS = function () {
        var aas = i40_aas_objects_1.AssetAdministrationShellEnv.fromJSON(JSON.parse(fs_1.readFileSync(this.base + 'instance-1-power-distribution.json', 'utf-8')));
        console.log(JSON.stringify(aas, null, 3));
    };
    return Test2;
}());
exports.Test2 = Test2;
