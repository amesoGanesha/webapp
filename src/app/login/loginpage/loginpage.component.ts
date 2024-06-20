import { Component } from '@angular/core';
import { FormControl, Validators ,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  LoginForm=new FormGroup({
    'login' : new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required])
  })
}
