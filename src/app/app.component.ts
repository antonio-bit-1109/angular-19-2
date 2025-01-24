import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InputTextModule,
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public nome = '';

  public allievi = signal<string[]>(['antonio']);

  public aggiungiAllievo(allievo: string) {
    this.allievi.update((prev) => [...prev, allievo]);
  }

  public rimuoviAlunno(i: number) {
    this.allievi.update((prev) => {
      const prevArr = [...prev];
      prevArr.splice(i, 1);
      return prevArr;
    });
  }
}
