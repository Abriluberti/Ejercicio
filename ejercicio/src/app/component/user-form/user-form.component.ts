import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../clases/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  newUser = {
    name: '',
    username: '',
    email: '',
    address: { city: '' },
    phone: '',
    company: { name: '' }
  };

  @Output() addUser = new EventEmitter<any>();

  onSubmit() {
    this.addUser.emit(this.newUser);
    this.newUser = {
      name: '',
      username: '',
      email: '',
      address: { city: '' },
      phone: '',
      company: { name: '' }
    };
  }
}