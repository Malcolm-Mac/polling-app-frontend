import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterUseCase } from '../../../../../../domain/usecases/Auth/user-register.usecase';
import { userRegisterUseCaseProvider } from '../../../../../../data/data.module';
import { UserRepository } from '../../../../../../domain/repositories/user.repository';
import { UserImplementationRepository } from '../../../../../../data/repositories/user/user-implementation.repository';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [
    userRegisterUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userRegisterUseCase: UserRegisterUseCase,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordsMatchValidator
    });
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }


  onSubmit(): void {
    this.submitted = true; // Set submitted flag to true
    this.loading = true; // Show loading indicator

    if (this.registerForm.valid) {
      const { firstName, lastName, email, password, confirmPassword } = this.registerForm.value;

      // Call the user registration use case
      this.userRegisterUseCase.execute({ firstName, lastName, email, password, confirmPassword }).subscribe(
        (user) => {
          this.snackBar.open('Registered successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['success-snackbar']
          });
          // Reset form and navigate to login on successful registration
          this.resetForm();
          this.router.navigate(['/login']);
          this.loading = false; // Hide loading indicator
        },
        (error) => {

          if (error.error) {
            console.error('Error body', error.error);
          }
          if (error.status) {
            console.error('Status code', error.status);
          }

          // Reset form and hide loading indicator on failure
          this.resetForm();
          this.loading = false;

          this.snackBar.open('Registration failed. Please try again.', 'Close', {
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

  resetForm() {
    this.registerForm.reset();
    this.submitted = false;
    this.loading = false;
  }
}
