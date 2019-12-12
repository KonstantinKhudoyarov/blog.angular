import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Post } from '../shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSub = this.postsService.getAll()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
