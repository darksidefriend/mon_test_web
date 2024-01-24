import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log('login', this.userDataControl.get('login')?.value);
    console.log('password', this.userDataControl.get('password')?.value);
    
    
  }

}
