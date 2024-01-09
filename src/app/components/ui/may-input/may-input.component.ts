import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-may-input',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './may-input.component.html',
  styleUrl: './may-input.component.scss'
})

export class MayInputComponent {
  @Input() formGroup: FormGroup;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() required: boolean;
  @Input() controlName: string;
  @Input() errors: { type: string; message: string }[];

}
