import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './servicio/user.service';
import { User } from './clases/user';
import { UserFormComponent } from "./component/user-form/user-form.component";
import { UserListComponent } from "./component/user-list/user-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserCardComponent } from "./component/user-card/user-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponent, UserListComponent, FormsModule, CommonModule, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    } else {
      this.fetchUsers();
    }
    this.filteredUsers = this.users;
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
        this.filteredUsers = data;
        localStorage.setItem('users', JSON.stringify(this.users));
      });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addUser(newUser: any) {
    this.users.push(newUser);
    this.filteredUsers = [...this.users];
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}