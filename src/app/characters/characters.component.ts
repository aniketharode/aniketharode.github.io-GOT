import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  private allValues=[];
  private BooksName=[];
  currentblogvalue;
  currentBookName=[];
  str=[];
  
   j=0;  
  constructor(private httpservice:GotServiceService) { }

  ngOnInit() {

    this.httpservice.getCharacters().subscribe(

      (data) => {
       // console.log("inside the data of the init"+data.length);
        for(let i=0;i<data.length;i++){
        this.allValues[i]=data[i];
        console.log("inside the data of the init"+data["books"]);
        
        }
      },
      (error) => {
        console.log("error from the init eror");
      }

    )

    

  }

}
  
  