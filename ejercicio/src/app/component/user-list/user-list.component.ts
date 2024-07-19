import { Component, Input } from '@angular/core';
import { User } from '../../clases/user';
import { UserCardComponent } from "../user-card/user-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: User[] = [];

}
