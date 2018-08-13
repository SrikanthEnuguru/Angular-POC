import { Component, OnInit } from '@angular/core';
declare var dhtmlXGridObject: any;

@Component({
  selector: 'app-sm-grid',
  templateUrl: './sm-grid.component.html',
  styleUrls: ['./sm-grid.component.css']
})
export class SmGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadDhtmlxGrid();
  }

  loadDhtmlxGrid(){   
     var myGrid = new dhtmlXGridObject('gridbox');    
      myGrid.setImagePath("src/assets/DhtmlxGrid/codebase/imgs/");    
      myGrid.setHeader("Period,1,2,3,4,5",null,
      ["text-align:center;","text-align:center;","text-align:center","text-align:center"
      ,"text-align:center","text-align:center"]);      
			//myGrid.setInitWidths("80,150,100,80,80,80,80,100");
			//myGrid.setColAlign("left,left,left,right,center,left,center,center");
      //myGrid.setColTypes("ro,ed,ed,price,,co,ra,ro");
      //myGrid.setColSorting("int,str,str,int,str,str,str,date");
      //myGrid.setSkin("skyblue");
			myGrid.enableAutoWidth(true);
			myGrid.enableAutoHeight(true);
      myGrid.init();
      myGrid.addRow(1,"Input Values,1,2,3,4,5");
      myGrid.addRow(2,"Normalized Values,1,2,3,4,5");
  }

}
