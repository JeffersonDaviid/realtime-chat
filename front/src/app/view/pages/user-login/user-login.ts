import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Navbar } from '@component/navbar/navbar';
import { AuthService } from '@model/services/auth-service';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule, Navbar],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css',
})
export class UserLogin {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _formBuilder = inject(FormBuilder);

  formLogin: FormGroup;

  constructor() {
    this.formLogin = this._formBuilder.group({
      correo: ['', [Validators.email, Validators.required]],
      contrasena: ['', [Validators.required]],
    });
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formLogin.get(controlName)?.hasError(errorType) &&
      this.formLogin.get(controlName)?.touched
    );
  }

  enviar() {
    this.formLogin.markAllAsTouched;

    if (this.formLogin.invalid) return;

    const email = this.formLogin.get('correo')?.value;
    const pass = this.formLogin.get('contrasena')?.value;

    this._authService.login(email, pass);

    console.log(`Ingresaste con email: ${email} y pass: ${pass}`);

    this._router.navigate(['/dashboard/communities']);
  }
}
