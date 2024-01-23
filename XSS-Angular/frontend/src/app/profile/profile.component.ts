import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {FlexModule, FlexLayoutModule} from "@angular/flex-layout";
import {MatStepperModule} from "@angular/material/stepper";
import {TokenService} from "../auth/token.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatFormFieldModule, FormsModule, MatInputModule, MatSidenavModule, MatListModule, RouterLinkActive, RouterLink, FlexModule, MatStepperModule, ReactiveFormsModule, MatDialogModule, FlexLayoutModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(public dialog: MatDialog, private router: Router, public tokenService: TokenService) {
  }

  public editProfile(): void {
      const dialogRef = this.dialog.open(EditProfileComponent, {
        width: '600px',
        height: '650px'
      });
  }

  public logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }
}
