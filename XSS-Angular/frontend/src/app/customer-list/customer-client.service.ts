import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model";
import {AuthService} from "../auth/auth.service";
import {environment} from "../environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerClientService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>( environment.apiUrl + '/customers');
  }

  public deleteCustomer(id: string): Observable<void> {
    return this.http.delete<any>(environment.apiUrl + '/customers/' + id);
  }

  public getCustomer(username: string | null): Observable<Customer> {
    return this.http.get<Customer>(environment.apiUrl + '/customers/' + username);
  }

  public updateCustomer(username: string | null, customer: Customer): Observable<Customer> {
    return this.http.put<any>(environment.apiUrl + '/customers/' + username, customer);
  }
}
