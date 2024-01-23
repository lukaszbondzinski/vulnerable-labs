import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerListComponent} from "../customer-list/customer-list.component";
import {ProfileComponent} from "../profile/profile.component";
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenService} from "../auth/token.service";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, CustomerListComponent, ProfileComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {


  constructor(public tokenService: TokenService) {
  }

}
