import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import usersData from '../data/users.json';
import { User } from '../models/User';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [FormsModule, NgClass],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  searchVal: string = "";
  users: User[] = usersData;
  isVisible: boolean = false;

  searchHandler(): void {
    if (this.searchVal.length === 0) this.users = usersData;
    else {
      this.users = usersData.filter(user => user.email.includes(this.searchVal));
      this.isVisible = true;
    }
  }

  resetHandler(): void {
    this.isVisible = false;
    this.users = usersData;
    this.searchVal = "";
  }
}
