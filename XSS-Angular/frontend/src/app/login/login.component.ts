import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../auth/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;
  public loginError: boolean = false;

  constructor(private auth: AuthService, private router: Router, private tokenService: TokenService) {}
  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.auth.login(
      this.loginForm.get('username')!.value,
      this.loginForm.get('password')!.value
    ).subscribe({
      next: (data) => {
        const jwt = (data as any)["token"];
        this.tokenService.setToken(jwt);
        this.loginError = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.loginError = true;
      },
    });
  }

}
