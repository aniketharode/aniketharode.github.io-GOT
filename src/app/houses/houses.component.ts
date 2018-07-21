import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  private allValues=[];
  private BooksName=[];
  currentblogvalue;
  currentBookName=[];
  str=[];
  
   j=0;  
  constructor(private httpservice:GotServiceService) { }

  ngOnInit() {

    this.httpservice.getHouses().subscribe(

      (data) => {
       // console.log("inside the data of the init"+data.length);
        for(let i=0;i<data.length;i++){
        this.allValues[i]=data[i];
       // console.log("inside the data of the init"+data["books"]);
        
        }
      },
      (error) => {
        console.log("error from the init eror");
      }

    )

    

  }


}
