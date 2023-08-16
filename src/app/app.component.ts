import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public number = 953656656532652626;
  public iban = 'TR5454512622656695';

  streetName: string = "";
  complement: string = "";

  // regex email ^[a-zA-Z]+\w+@\w+(\.\w{1,10}){0,1}$

  public price01 = 25971456111.5475757;
  public price02 = 25971456111.256;
  public price03 = 25971456111.66;
  public zero = 0.0; // 0 , 0.0 => 0

  public tr = 155151.9555;
  public tr2 = 155151.9555;

  constructor(fb: FormBuilder, public http: HttpClient) {
    this.form = fb.group({
      number: null,
    });
  }

  getCep(e) {
    if (e.length === 9) {
      console.log(e);
      this.searchInViaCep(e).subscribe(
        (data) => {
          const response = data as any;
          console.log(response);
          this.streetName = response.logradouro
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  }

  searchInViaCep(cep) {
    const url = 'https://viacep.com.br/ws/' + cep + '/json/';
    return this.http.get(url);
  }
}
