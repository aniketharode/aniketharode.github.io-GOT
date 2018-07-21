import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotServiceService } from '../got-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [Location]
})
export class BookDetailsComponent implements OnInit {

 val:any;
 currentblogvalue:any;
 characterName=[];
 currentcharacter = [];

  constructor(private activerouter:ActivatedRoute,private router:Router,private gotservice:GotServiceService,public location:Location) { }

  ngOnInit() {

   let val =  this.activerouter.snapshot.paramMap.get('val');
   console.log("values are:-"+val);

   this.gotservice.getBooksDetails(val).subscribe(

    data => {
      //console.log("inside the data of the init");
      
      this.currentblogvalue=data;
      
      //this.currentblogvalue[1]=data["isbn"];
      //this.currentblogvalue[2]=data["numberOfPages"];
      //this.currentblogvalue[3]=data["publisher"];
      //this.currentblogvalue[4]=data["country"];
      //this.currentblogvalue[5]=data["released"];
      for(let i=0;i<10;i++){
      this.currentcharacter[i]=data["characters"][i];
       //another code ----------------------
       this.gotservice.getCharactersDetails(this.currentcharacter[i]).subscribe(

        data => {
               this.characterName[i]=data;
               console.log("character name:"+this.characterName[i].name);
        },
     
        error => {
        console.log("error from the init eror");
        //console.log(error.errorMessage);
        
        }

       )









       //end of it ---------------------------------
      }
      //for(let i=0;i<this.currentblogvalue.length;i++)
      console.log("inside the data of the init"+this.currentblogvalue.name);
     
     },
     
     error => {
     console.log("error from the init eror");
     //console.log(error.errorMessage);
     
     }
     


  )

  



  }

 goBack():any{
    this.location.back();
  }
}
