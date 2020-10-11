import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import * as go from 'gojs';
import { DigitalTwinModelComplete } from '../model/admin-shell-model';

var $ = go.GraphObject.make;


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @Input()
  model: DigitalTwinModelComplete;

  @ViewChild('#myDiagramDiv', { static: true })
  myDiv: HTMLDivElement;

  myDiagram: go.Diagram;
  diagramModel: go.Model;

  constructor() { }

  ngAfterViewInit() {
    this.myDiagram = $(go.Diagram, "myDiagramDiv");
    this.diagramModel = $(go.Model);
    // for each object in this Array, the Diagram creates a Node to represent it
    this.diagramModel.nodeDataArray = [
      { key: "Alpha" },
      { key: "Beta" },
      { key: "Gamma" }
    ];
    this.myDiagram.model = this.diagramModel;
  }


}
