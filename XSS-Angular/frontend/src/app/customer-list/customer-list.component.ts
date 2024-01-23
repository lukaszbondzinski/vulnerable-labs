import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {Customer} from "../model";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {CustomerClientService} from "./customer-client.service";
import {CustomerProfileComponent} from "../customer-profile/customer-profile.component";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerHttp: CustomerClientService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.customerHttp.getCustomers()
      .subscribe((customers)  => {
      this.customers = customers;
    })
  }

  deleteCustomer(customer: Customer) {
    this.customerHttp.deleteCustomer(customer.id)
      .subscribe(it => this.customers = this.customers.filter(c => c.id !== customer.id));
  }

  showProfile(customer: Customer) {
      const dialogRef = this.dialog.open(CustomerProfileComponent, {
        width: '400px',
        data: customer
      });
  }
}
