import {Component, OnInit, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CustomerClientService} from "../customer-list/customer-client.service";
import {Customer} from "../model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {TokenService} from "../auth/token.service";


@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<EditProfileComponent>, private customerClient: CustomerClientService,
              private fb: FormBuilder, private tokenService: TokenService) {}

  public customer: Customer;
  public profileForm: FormGroup;


  ngOnInit(): void {
    const username = this.tokenService.getCurrentLoggedUsername();
    this.customerClient.getCustomer(username).
    subscribe(it => {
      this.customer = it;
      this.profileForm = this.fb.group({
        pesel: [this.customer.pesel, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        serialNumber: [this.customer.serialNumber, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
        country: [this.customer.address.country, [Validators.required, Validators.minLength(4)]],
        city: [this.customer.address.city, [Validators.required, Validators.minLength(4)]],
        street: [this.customer.address.street, [Validators.required, Validators.minLength(4)]],
        flatNumber: [this.customer.address.flatNumber, [Validators.required, Validators.minLength(1)]],
        documentsUrl: [this.customer.documentsUrl, [Validators.required, Validators.pattern('^(http|https)://.*$')]]
      });

    });

  }

  submitForm(): void {
    const username = this.tokenService.getCurrentLoggedUsername();
    this.customerClient.updateCustomer(username, this.customer)
      .subscribe(it => this.dialogRef.close());
  }
}
