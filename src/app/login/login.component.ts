import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  hide = true;

  ngOnInit(){}

  userFormControl = new FormControl('', [
  Validators.required,
  Validators.email
]);

/*onChange(event) {
  console.log(event);
}*/

}

