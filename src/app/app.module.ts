import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule, HttpClient } from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {RouterModule,Routes} from '@angular/router';
import { GotServiceService } from './got-service.service';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HousesComponent } from './houses/houses.component';
import { HousedetailsComponent } from './housedetails/housedetails.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookDetailsComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    HousesComponent,
    HousedetailsComponent,
    PostCommentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'books',component:BooksComponent},
    {path:'characters',component:CharactersComponent},
    {path:'houses',component:HousesComponent},
    {path:'comment',component:PostCommentComponent},
    {path:'housedetails/:val',component:HousedetailsComponent},
    {path:'bookdeatils/:val',component:BookDetailsComponent},
    {path:'Characterdeatils/:val',component:CharacterDetailsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [GotServiceService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
