import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginData:any[] = [];
  loginObj: any;

  constructor(private formBuilder: FormBuilder, private notify : NotifierService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    });
  }

  submitForm(){
    this.loginData.push(this.loginForm.value)
    console.log(this.loginData)
    const myData = localStorage.getItem('signupData')
    if (myData !== null) {
      console.log(JSON.parse(myData));
      this.loginObj = JSON.parse(myData)
    } else {
        console.log('No data found in localStorage');
    }
    
    if(this.loginData[this.loginData.length-1].email === this.loginObj.email && this.loginData[this.loginData.length-1].password === this.loginObj.password){
      this.notify.showSuccess("Successfully logged in.")
    }else{
      this.notify.showError("Incorrect password")
    }
  }

}
