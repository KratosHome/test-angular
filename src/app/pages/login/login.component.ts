import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userDate: FormGroup;
  isAuth: boolean = false;

  constructor() {
    this.userDate = new FormGroup<any>({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.userDate.valid) {
      console.log(this.userDate.value);
    }
  }
}
