import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/from'; 
import 'rxjs/add/observable/of'; 

@Injectable()
export class GotServiceService {

  
  constructor(private http:HttpClient) { 

  }

  public  response;
  public  response1=[];
  public str:any[];
  books = [];

  private baseurl:string="https://anapioficeandfire.com/api";


/*public getBooks():Observable<any[]>{
 
  for(let i=1;i<=10;i++){
    this.response[i] = this.http.get(this.baseurl+'/books/'+i);
    //response[1] = this.http.get(this.baseurl+'/books/2');
   this.str=["a","f"];
  console.log("response:"+this.response[i]+""+this.str);
  
}
return Observable.of(this.response);



}*/


public getBooks():any{
 
  
    this.response = this.http.get(this.baseurl+'/books');
    //response[1] = this.http.get(this.baseurl+'/books/2');
   this.str=["a","f"];
  console.log("response:"+this.response+""+this.str);
  

return this.response;



}


public getBooksDetails(val:any):any{
 
  
  this.response = this.http.get(val);
  //response[1] = this.http.get(this.baseurl+'/books/2');
 this.str=["a","f"];
console.log("response:"+this.response+""+this.str);


return this.response;



}



public getCharactersDetails(val:any):any{
 
  
  this.response = this.http.get(val);
  //response[1] = this.http.get(this.baseurl+'/books/2');
 this.str=["a","f"];
//console.log("response:"+this.response+""+this.str);


return this.response;



}


public getCharacters():any{
 
  //for(let i=1;i<100;i++){
    console.log("characters:");
  this.response = this.http.get(this.baseurl+'/characters');
  //response[1] = this.http.get(this.baseurl+'/books/2');
 this.str=["a","f"];
console.log("response:"+this.response);
//}

return this.response;



}


public getCharactersBooks(books):any{
 
  //for(let i=1;i<10;i++){
   // console.log("characters books:"+books.name);
  // console.log("response after*****"+books.length);
  this.response = this.http.get(books);
  //response[1] = this.http.get(this.baseurl+'/books/2');
 this.str=["a","f"];
//console.log("response befor*****");


return this.response;



}


public getHouses():any{
 
  //for(let i=1;i<100;i++){
   // console.log("characters:");
  this.response = this.http.get(this.baseurl+'/houses');
  //response[1] = this.http.get(this.baseurl+'/books/2');
 this.str=["a","f"];
//console.log("response:"+this.response);
//}

return this.response;



}




}
