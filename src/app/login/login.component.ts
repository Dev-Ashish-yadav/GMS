import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      username: ['Admin', [Validators.required]],
      password: ['Admin', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {

  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Example login logic
      if (username === 'Admin' && password === 'Admin') {
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          text: 'You have successfully logged in.',
          showConfirmButton: true,
          timer: 1000
        });
        this.router.navigate(['/dashboard']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid credentials',
          text: 'Please try again with valid credentials.',
          showConfirmButton: true,
          timer: 2000
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid form',
        text: 'Please fill in all required fields correctly.',
        showConfirmButton: true,
        timer: 2000
      });
    }
  }
}

