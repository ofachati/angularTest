import { Component } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface FileNode1 {
  name: string;
  children?: FileNode1[];
}

const TREE_DATA2: FileNode1[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];




interface SearchResultModel {
  folderName: String,
  types?: {TypeName: String , FileName : String[]}[],
}

const TREE_DATA3: FileNode1[]=[{
  "name": "Current Versions",
  "children": [
    {
      "name": "NN",
      "children": [
       { "name":"0204001541_0B_Caliper Assy.pdf"},
       { "name":"0204001541_-C_Assembly caliper.pdf"}
      ]
    },
    {
      "name": "DRW",
      "children": [
        { "name":"DRW_0204001541_00_02.pdf"},
        { "name":"DRW_0204001541_01_-C.pdf"}
      ]
    }
  ]
}, {
  "name": "Legacy 0204",
  "children": [
    {
      "name": "NN",
      "children": [
        { "name": "0204001541e00s01.pdf"},
        { "name":"0204001541e0As01.pdf"},
        { "name":"0204001541e0Bs01.pdf"}
      ]
    }
  ]
}] 
interface FileNode {
  docID: number;
  fileName: String;
  partNumber: String;
  revision: String;
  type: String;
  lastVersion: boolean;
  folderName: String;
  path: String;
 // children?: FileNode[];
}

const TREE_DATA: FileNode[]=
[
  {
     "docID":2,
     "fileName":"0204001541_0B_Caliper Assy.pdf",
     "partNumber":"0204001541",
     "revision":"NN        ",
     "type":"NN",
     "lastVersion":false,
     "folderName":"Current Versions",
     "path":"\\\\dryfdc301.fbrakes.com\\Fileshare_engineering_masterdata\\Commun\\Current versions\\"
  },
  {
     "docID":7,
     "fileName":"0204001541_-C_Assembly caliper.pdf",
     "partNumber":"0204001541",
     "revision":"NN        ",
     "type":"NN",
     "lastVersion":false,
     "folderName":"Current Versions",
     "path":"\\\\dryfdc301.fbrakes.com\\Fileshare_engineering_masterdata\\Commun\\Current versions\\"
  },
  {
     "docID":4951,
     "fileName":"DRW_0204001541_00_02.pdf",
     "partNumber":"0204001541",
     "revision":"02        ",
     "type":"DRW",
     "lastVersion":true,
     "folderName":"Current Versions",
     "path":"\\\\dryfdc301.fbrakes.com\\Fileshare_engineering_masterdata\\Commun\\Current versions\\"
  },
  {
     "docID":4954,
     "fileName":"DRW_0204001541_01_-C.pdf",
     "partNumber":"0204001541",
     "revision":"-C        ",
     "type":"DRW",
     "lastVersion":false,
     "folderName":"Current Versions",
     "path":"\\\\dryfdc301.fbrakes.com\\Fileshare_engineering_masterdata\\Commun\\Current versions\\"
  },
  {
     "docID":36717,
     "fileName":"0204001541e00s01.pdf",
     "partNumber":"0204001541",
     "revision":"000       ",
     "type":"NN",
     "lastVersion":false,
     "folderName":"Legacy 0204",
     "path":"\\\\dryfdc301\\Fileshare_engineering_masterdata\\Commun\\Legacy_Data\\Converted\\Serial\\0204\\"
  },
  {
     "docID":36765,
     "fileName":"0204001541e0As01.pdf",
     "partNumber":"0204001541",
     "revision":"A         ",
     "type":"NN",
     "lastVersion":false,
     "folderName":"Legacy 0204",
     "path":"\\\\dryfdc301\\Fileshare_engineering_masterdata\\Commun\\Legacy_Data\\Converted\\Serial\\0204\\"
  },
  {
     "docID":36952,
     "fileName":"0204001541e0Bs01.pdf",
     "partNumber":"0204001541",
     "revision":"B         ",
     "type":"NN",
     "lastVersion":false,
     "folderName":"Legacy 0204",
     "path":"\\\\dryfdc301\\Fileshare_engineering_masterdata\\Commun\\Legacy_Data\\Converted\\Serial\\0204\\"
  }
]

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';


  treeControl = new NestedTreeControl<FileNode1>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileNode1>();

  constructor() {
    this.dataSource.data = TREE_DATA3;
  }

  hasChild = (_: number, node: FileNode1) => !!node.children && node.children.length > 0;
}
