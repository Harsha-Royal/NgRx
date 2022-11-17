import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { post } from 'src/models/PostsModel';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store : Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors() : any {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm!.touched && !descriptionForm!.valid) {
      if (descriptionForm!.errors?.required) {
        return 'Description is required';
      }

      if (descriptionForm!.errors?.minlength) {
        return 'Description should be of minimum 10 characters length';
      }
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
     
    const post : post = {
      title : this.postForm.value.title,
      description : this.postForm.value.description,
    }

    this.store.dispatch(addPost({post}));
    this.router.navigate(['posts']);
    console.log(this.postForm.value);
  }
}