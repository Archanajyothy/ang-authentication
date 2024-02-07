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
  formData: any[] = []
  validPassword: boolean = true;

  months = ['January','February','March','April',
            'May','June','July','August',
            'September','October','November','December']

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dobMonth: ['', Validators.required],
      dobDay: ['', Validators.required],
      dobYear: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: ['', Validators.required],
      eligibility: [false, Validators.requiredTrue]
    });
  }

  submitForm(event: Event){
    this.formData = this.signupForm.value;
    if(this.signupForm.value.password !== this.signupForm.value.confirmPassword){
      this.validPassword = false;
      console.log(this.validPassword);
      event.preventDefault(); 
    } else {
      this.validPassword = true;
      localStorage.setItem('signupData',JSON.stringify(this.formData))
      console.log(this.formData);
      
    }
  }
  
}
