import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/interfaces';
import { switchMap } from 'rxjs/operators';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.route.params
      .pipe(
          switchMap(params => {
            return this.postsService.getById(params['id']);
          })
        )
        .subscribe(post => {
          this.post = post;
        });
  }

}
