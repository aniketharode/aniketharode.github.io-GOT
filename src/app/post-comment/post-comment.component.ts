import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

 public comment:string;

 constructor(public bloghttpservice:GotServiceService,public activerouter:ActivatedRoute,public router:Router,public toastr: ToastrService, vcr: ViewContainerRef) { 
 
}

  ngOnInit() {

   
    
  }

 public createBlog():any{
 // commentbody:this.commentbody; 
 
  this.toastr.success('comment posted successfully', 'Success!');

      setTimeout(() =>{
        this.router.navigate(['/books']);
        //console.log(data.data.blogId);
  },1000)
  }

}
