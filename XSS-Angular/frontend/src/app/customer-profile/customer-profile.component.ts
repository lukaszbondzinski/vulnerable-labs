import {AfterViewInit, Component, ElementRef, Inject} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule],
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent implements AfterViewInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private el: ElementRef) {}

 documentsUrl='';

  ngAfterViewInit(): void {
    this.setUrlUsingNativeAPI();
  }

  private setUrlUsingNativeAPI(): void {
    const link = this.el.nativeElement.querySelector('#documentsTag');
    link!.setAttribute("href", this.data.documentsUrl);
  }

}
