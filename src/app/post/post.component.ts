import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../typings/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  postId$: number;
  post$: Post;
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.postId$ = params.id));
  }

  ngOnInit() {
    this.data.getPost(this.postId$).subscribe(data => {
      this.post$ = data;
      console.log("post: ", this.post$);
    });
  }
}
