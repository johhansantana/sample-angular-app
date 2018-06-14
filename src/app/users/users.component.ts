import { User } from "./../../typings/user";
import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users$: User[];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users$ = data;
      console.log("users: ", this.users$);
    });
  }
}
