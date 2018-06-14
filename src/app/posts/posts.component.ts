import { Post } from "./../../typings/post";
import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts$: Post[];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPosts().subscribe(data => {
      this.posts$ = data;
      console.log("posts: ", this.posts$);
    });
  }
}
