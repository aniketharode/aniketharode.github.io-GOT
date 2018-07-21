import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GotServiceService } from '../got-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: [Location]
})
export class CharacterDetailsComponent implements OnInit {

  val:any;
  currentblogvalue:any;
  currentBookName = [];

  constructor(private activerouter:ActivatedRoute,private router:Router,private gotservice:GotServiceService,public location:Location) { }

  ngOnInit() {
    let val =  this.activerouter.snapshot.paramMap.get('val');
   console.log("values are:-"+val);

   this.gotservice.getCharactersDetails(val).subscribe(

    data => {

      this.currentblogvalue=data;
      console.log("character name:"+data["books"].length);
      for(let i=0;i<data["books"].length;i++){
        this.currentBookName[i]=data["books"][i];
        //console.log("book name :- "+this.currentBookName[i]);
        this.gotservice.getCharactersDetails(this.currentBookName[i]).subscribe(

          data => {
                 this.currentBookName[i]=data;
                 console.log("character name:"+this.currentBookName[i].name);
                
          },
       
          error => {
          console.log("error from the init eror");
          //console.log(error.errorMessage);
          
          }
  
         )



      }
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
