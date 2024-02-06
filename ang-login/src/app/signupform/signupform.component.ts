import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css'
})
export class SignupformComponent {
  constructor(private formBuilder: FormBuilder) { }

  signupForm!: FormGroup;

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      // dobMonth: ['', Validators.required],
      dobDay: ['', Validators.required],
      dobYear: ['', Validators.required],
      // gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      eligibility: [false, Validators.requiredTrue]
    });
  }

  submitForm(){

  }
}
