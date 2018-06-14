import { Post } from "./../typings/post";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../typings/user";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUser(userId: number) {
    return this.http.get<User>(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
  }

  getPosts() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPost(postId: number) {
    return this.http.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
  }
}
