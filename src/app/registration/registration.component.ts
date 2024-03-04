import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  result:any
 
  constructor(private fb: FormBuilder, private router:Router, private snackbar:MatSnackBar) {}
 
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required,  Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])[0-9a-zA-Z!@#$%^&*()_+}{"':;?/>.<,]{8,}$/)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
 
  
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
   
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
      return null;
    }
  

    onSubmit(){
      if(this.registrationForm.valid)
      {
       
       
          this.snackbar.open('User Registered Successfully', '', {
            duration: 2000, // Duration in milliseconds
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass:['snackbar']
          });
          this.router.navigate(['/login'])

      }
     
    }

      
  onCancel(): void {
    this.registrationForm.reset(); // Reset the form
    Object.keys(this.registrationForm.controls).forEach(key => { 
      this.registrationForm.get(key)?.setErrors(null);
    });
  }
 
  hidePassword: boolean = true;
hideConfirmPassword: boolean = true;
 
togglePasswordVisibility(): void {
  this.hidePassword = !this.hidePassword;
}
 
toggleConfirmPasswordVisibility(): void {
  this.hideConfirmPassword = !this.hideConfirmPassword;
}
}




