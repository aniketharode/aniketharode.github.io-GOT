import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';

import * as $ from 'jquery';

declare var jQuery: any;

import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  private allValues=[];
  
  //private loadScript;
  //declare var Jquery:any;
  constructor(private httpservice:GotServiceService) { 
    console.log("insde the home compoent constructor");
  }

  /*async ngAfterViewInit() {
	  alert("inside it");
	await this.loadScript('./assets/js/loadingoverlay.min.js');
 and implents these ,AfterViewInit

}

private loadScript(scriptUrl: string) {
	return new Promise((resolve, reject) => {
	  const scriptElement = document.createElement('script')
	  scriptElement.src = scriptUrl
	  scriptElement.onload = resolve
	  document.body.appendChild(scriptElement)
	})
  }*/
  

  ngOnInit() {
	
   
    


  }

}
