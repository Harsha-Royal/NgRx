import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { post } from 'src/models/PostsModel';
import { getPosts } from '../state/posts.selector';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts : Observable<post[]>;
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

}
