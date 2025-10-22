import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControlOptions,
} from '@angular/forms';
import { Navbar } from '@component/navbar/navbar';

@Component({
  selector: 'app-user-register',
  imports: [ReactiveFormsModule, Navbar],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css',
})
export class UserRegister {
  private _formBuilder = inject(FormBuilder);

  formRegister!: FormGroup;

  constructor() {
    const passwordMatchValidator = (group: FormGroup) => {
      const pass = group.get('contrasena');
      const confirm = group.get('confirmContrasena');

      if (!pass || !confirm) return null;

      // If confirm has other errors, don't overwrite them
      const otherErrors = confirm.errors && !confirm.errors['passwordsMismatch'];

      if (otherErrors) return null;

      if (pass.value !== confirm.value) {
        confirm.setErrors({ ...(confirm.errors || {}), passwordsMismatch: true });
      } else {
        if (confirm.errors) {
          const { passwordsMismatch, ...rest } = confirm.errors;
          if (Object.keys(rest).length === 0) {
            confirm.setErrors(null);
          } else {
            confirm.setErrors(rest);
          }
        }
      }

      return null;
    };

    const cedulaValidator = (control: any) => {
      const value = (control?.value ?? '').toString().trim();
      if (!value) return null;

      // Must be exactly 10 digits
      if (!/^\d{10}$/.test(value)) return { invalidCedula: true };

      const province = parseInt(value.substring(0, 2), 10);
      if (province < 1 || province > 24) return { invalidCedula: true };

      const third = parseInt(value[2], 10);
      if (third > 5) return { invalidCedula: true };

      const digits = value.split('').map((d: string) => parseInt(d, 10));
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        let num = digits[i];
        if (i % 2 === 0) {
          num *= 2;
          if (num > 9) num -= 9;
        }
        sum += num;
      }

      const check = (10 - (sum % 10)) % 10;
      return check === digits[9] ? null : { invalidCedula: true };
    };

    this.formRegister = this._formBuilder.group(
      {
        cedula: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        nombre: ['', [Validators.minLength(3), Validators.required]],
        apellido: ['', [Validators.minLength(3), Validators.required]],
        correo: ['', [Validators.email, Validators.required]],
        contrasena: ['', [Validators.minLength(5), Validators.required]],
        confirmContrasena: ['', [Validators.minLength(5), Validators.required]],
        direccion: ['', Validators.required],
      },
      { validators: passwordMatchValidator } as AbstractControlOptions
    );
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formRegister.get(controlName)?.hasError(errorType) &&
      this.formRegister.get(controlName)?.touched
    );
  }

  enviar() {
    this.formRegister.markAllAsTouched();

    if (this.formRegister.invalid) {
      return;
    }

    // no errors — proceed
    console.log('sending', this.formRegister.value);
  }
}
