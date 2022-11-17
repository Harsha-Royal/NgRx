import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { post } from 'src/models/PostsModel';
import { updatePost } from '../state/posts.action';
import { getPostsById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

    post : post; 
    postForm : FormGroup;
    postSubscription : Subscription;
  constructor(private store : Store<AppState>,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>
    {
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostsById,{id}).subscribe(
        (data) => {this.post = data;
        this.createForm();
        }
      );
    }
    
    );
  }

  createForm(){
    this.postForm = new FormGroup({
      title : new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
      description : new FormControl(this.post.description,[Validators.required,Validators.minLength(10)])
 
    })
    }

    ngOnDestroy() {
      if (this.postSubscription) {
        this.postSubscription.unsubscribe();
      }
    }

    onSubmit()
    {
      if (!this.postForm.valid) {
        return;
      }
       
      const post : post = {
        id : this.post.id,
        title : this.postForm.value.title,
        description : this.postForm.value.description,
      }
  
      this.store.dispatch(updatePost({post}));
      console.log(this.postForm.value);

    }

}
