import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserLoginUseCase } from '../../../../../../domain/usecases/Auth/user-login.usecase';
import { userLoginUseCaseProvider } from '../../../../../../data/data.module';
import { UserRepository } from '../../../../../../domain/repositories/user.repository';
import { UserImplementationRepository } from '../../../../../../data/repositories/user/user-implementation.repository';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [
    userLoginUseCaseProvider, { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userLoginUseCase: UserLoginUseCase,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    this.submitted = true; // Mark form as submitted
    this.loading = true;   // Show loading indicator

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userLoginUseCase.execute({ email, password }).subscribe(
        (user) => {
          console.log('Login successful', user);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/polls']);
          this.loading = false;
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['success-snackbar']
          });
        },
        (error) => {
          console.error('Login failed', error);
          if (error.error) {
            console.error('Error body', error.error);
          }
          if (error.status) {
            console.error('Status code', error.status);
          }
          this.loading = false;
          this.snackBar.open('Login failed. Please try again.', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      // Hide loading indicator if form is invalid
      this.loading = false;
    }
  }
}
