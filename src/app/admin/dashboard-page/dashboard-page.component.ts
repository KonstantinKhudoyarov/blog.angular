import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] =  [];
  pSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  deletePost(id) {

  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
