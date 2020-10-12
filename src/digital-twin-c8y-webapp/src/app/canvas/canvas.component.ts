import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import * as go from 'gojs';
import { AssetAdministrationShell } from 'i40-aas-objects';
import { InteractionNodes } from '../model/admin-shell-model';

var $ = go.GraphObject.make;
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @Input()
  set interactions(_it: InteractionNodes[]) {
    this._interactionNodes = _it;
    console.log('data received ', this._interactionNodes);
      this.renderTree();
  }

  // tslint:disable-next-line: variable-name
  _interactionNodes: InteractionNodes[];

  @ViewChild('#myDiagramDiv', { static: true })
  myDiv: HTMLDivElement;

  myDiagram: go.Diagram;
  diagramModel: go.GraphLinksModel;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.myDiagram = $(go.Diagram, "myDiagramDiv");
    this.myDiagram.nodeTemplate =
      $(go.Node, "Horizontal",
        { background: "#44CCFF" },
        $(go.TextBlock,
          "Default Text",
          { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
          new go.Binding("text", "name"))
      );
    this.renderTree();
  }

  private renderTree() {
    if(this.myDiagram === null || this.myDiagram === undefined){
      return;
    }
    console.log('here');
    this.diagramModel = $(go.GraphLinksModel);
    if (this._interactionNodes && this._interactionNodes.length > 0) {
      const map = new Map<string, string>();

      this._interactionNodes.forEach(_node => {
        map.set(_node.fromNode.identification.id, _node.fromNode.idShort);
        map.set(_node.toNode.identification.id, _node.toNode.idShort);
        // create link data
        this.diagramModel.linkDataArray.push({ from: _node.fromNode.identification.id, to: _node.toNode.identification.id });
      });
      console.log(map);
      map.forEach((_id, _name) => {
        this.diagramModel.nodeDataArray.push({ key: _id, name: _name });
      });
      // this.diagramModel.nodeDataArray.push({key: "1", name: "my name"});
    }
    this.myDiagram.model = this.diagramModel;
    // this.cdr.detectChanges();


    // var model = $(go.GraphLinksModel);
    // model.nodeDataArray =
    //   [
    //     { key: "A", name: "MyFirstName" },
    //     { key: "B", name: "MyFirstName" },
    //     { key: "C", name: "MyFirstName" }
    //   ];
    // model.linkDataArray =
    //   [
    //     { from: "A", to: "B" },
    //     { from: "B", to: "C" }
    //   ];
    // this.myDiagram.model = model;
  }
}
