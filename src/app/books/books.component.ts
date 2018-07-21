import { Component, OnInit, HostListener,ViewEncapsulation} from '@angular/core';
import { GotServiceService } from '../got-service.service';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {FormControl} from '@angular/forms';

import * as $ from 'jquery';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BooksComponent implements OnInit {

  private allValues=[];
  private name=[];
  private sortedname:any;
  private display:boolean;
  private sortedvalues:any;
  private test = [];
  private testname:any;
  shad:any = 'red';
  private searchval:string;
  private autosearch:any;
  private autosearch11:boolean;

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  


  constructor(private httpservice:GotServiceService) { 
    console.log("insde the home compoent constructor");
  }


 
  /*fireEvent(event: any, item: any){
console.log(item.name);
console.log(this.allValues.length);
console.log(event.type);
if(event.type=="mouseover"){
if(item.name==this.allValues[2].name)
$("#val").addClass("shad");
}
else
$("#val").removeClass("shad");
//if(item.name==this.allValues[0].name){
//$("#val").addClass("shad");
}
   */
  
  

  /*changeStyle($event){
    console.log($event.type);
    this.shad = $event.type == 'mouseover' ? 'yellow' : 'white';
    console.log(this.shad);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.shad.nativeElement.class = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.shad.nativeElement.class = 'yellow';
  }*/

  ngOnInit() {

    
   


   this.display=true;
   
   this.autosearch="";

this.httpservice.getBooks().subscribe(

      (data) => {
       
       for(let i=0;i<data.length;i++){
       this.allValues[i]=data[i];
       this.options[i]=this.allValues[i].name;
       // this.j = i;
       //let jn = i;
      // this.author[i] = data[i].authors;
       //for(let j=0;i<data[i].authors.length;j++){
       //this.auther[j]=data[i].authors[j];
       //console.log("\n auther "+this.allValues[i].authors);
      // }
      
       //console.log("\n inside the data of the init "+this.allValues);

      
      
       
       
      }
      
      
      
      /*$(document).ready(function(e){
        alert("1 click");
         
       
         
         $('#val').addClass("shad");
         alert("2 click");
       
 
     });
     */
     
      //console.log("\n size of the array "+data.length);
      //console.log("\n outside "+this.allValues);
      },
      
      error => {
      console.log("error from the init eror");
      //console.log(error.errorMessage);
      
      }
      
    )
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
      

}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}


sortBy(name:any){
//alert("button is clicked"+name);
this.display=false;
this.autosearch="";
//alert("button is clicked"+this.display);
this.httpservice.getBooks().subscribe(

  (data) => {
   //console.log("inside the data of the init"+data);
   for(let i=0;i<data.length;i++){
   this.allValues[i]=data[i];
   this.name[i] = this.allValues[i].name;
  this.test[i] = this.allValues[i];
   }
  // this.sortedname = this.name.sort();
   this.testname = this.test.sort((a,b) =>{
//alert("in sorting ");
     return (a.name>b.name)?1:(a.name<b.name)?-1:0;
   });
  //this.sortedvalues =  this.allValues.sort
   //console.log("soted values"+this.testname.name);
 
  },
  
  error => {
  console.log("error from the init eror");
  //console.log(error.errorMessage);
  
  }
  
)
}

backToNormal(val:any){
  this.display=true;
  this.httpservice.getBooks().subscribe(

    (data) => {
     
     for(let i=0;i<data.length;i++){
     this.allValues[i]=data[i];
     
     
     
    }
    
   
   // console.log("\n size of the array "+data.length);
    //console.log("\n outside "+this.allValues);
    },
    
    error => {
    console.log("error from the init eror");
    //console.log(error.errorMessage);
    
    }
    
  )
    
}


search(val:any){
   console.log(this.searchval);
   this.display=false;
 //  alert("button is clicked");
   this.httpservice.getBooks().subscribe(

    (data) => {
     
     for(let i=0;i<data.length;i++){
     this.allValues[i]=data[i];
     
     if(this.allValues[i].name==this.searchval){
      console.log("matched string "+this.allValues[i].name);
      this.autosearch = this.allValues[i];
      console.log(this.autosearch.url);
     // this.autosearch11=false;
      //break;
     }
     
    }
    
    
   
    },
    
    error => {
    console.log("error from the init eror");
    //console.log(error.errorMessage);
    
    }
    
  )
}



}
