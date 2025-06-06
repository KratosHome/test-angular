import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {LoginServices} from "../../services/login.services";
import {MayInputComponent} from "../../components/ui/may-input/may-input.component";
import {MyBtnComponent} from "../../components/ui/my-btn/my-btn.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MayInputComponent, MyBtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userDate: FormGroup;

  constructor(private readonly loginServices: LoginServices) {
    this.userDate = new FormGroup<any>({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.userDate.valid) {
      this.loginServices.login(this.userDate.value);
    }
  }

  logOut() {
    this.loginServices.logout();
  }
}
