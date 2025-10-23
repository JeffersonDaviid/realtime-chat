import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'chat-input-message',
  imports: [ReactiveFormsModule],
  templateUrl: './input-message.html',
  styleUrl: './input-message.css',
})
export class InputMessage {
  private _formBuilder = inject(FormBuilder);
  protected formMessage: FormGroup;

  constructor() {
    this.formMessage = this._formBuilder.group({
      message: ['', Validators.required],
    });
  }

  message = output<string>();
  sendMessage() {
    if (this.formMessage.invalid) return;
    this.message.emit(this.formMessage.get('message')?.value);
    this.formMessage.reset();
  }
}
