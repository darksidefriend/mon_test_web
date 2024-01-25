import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userDataControl = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  test(){
    console.log('login', this.userDataControl.get('login')?.value);
    console.log('password', this.userDataControl.get('password')?.value);
    
    this.http.get('https://sql.lavro.ru/call.php?db=285312&pname=sign_in&p1=Dan&p2=123456&format=array').subscribe((data) => {
      console.log('data', data);
      
    });
    
  }

}
