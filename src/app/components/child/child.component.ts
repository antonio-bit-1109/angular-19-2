import {
  Component,
  Input,
  Output,
  EventEmitter,
  model,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() valDalPadre = false;
  @Output() valInUscita = new EventEmitter<boolean>();

  inviaSnack = output<any>();
  valore = model<boolean>(false); // variabile signal che funziona sia da input che output
  allievi = input<string[]>([]);

  snacks = signal(['bounty', 'kinder_bueno', 'mars']);
}
