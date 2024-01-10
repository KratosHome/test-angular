import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-btn',
  standalone: true,
  imports: [],
  templateUrl: './my-btn.component.html',
  styleUrl: './my-btn.component.scss'
})
export class MyBtnComponent {
  @Input() text: string;
  @Input() type?: string;
  @Input() click?: () => void;
  @Input() disabled?: boolean;
}
