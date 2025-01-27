import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InputTextModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    ChildComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public nome = '';

  public colore = signal('');
  public coloreSelezionato = signal('');
  public snack = signal(null);
  public allievi = signal<string[]>(['antonio']);

  public myBoolean = false;

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

  public cambiaColore() {
    this.coloreSelezionato.set(this.colore());
  }

  public valoriInarrivoFiglio(event: any) {
    this.myBoolean = event;
  }

  public valoridalFiglio(event) {
    this.snack.set(event);
  }
}
