import { Routes } from '@angular/router';
import { Pagina1Component } from './components/pages/pagina1/pagina1.component';
// import { Pagina2Component } from './components/pages/pagina2/pagina2.component';

// impostare il lazy loading con angular nuovo
// usare metodo loadComponent() e fare import
export const routes: Routes = [
  // il componente viene esportato normalmente  export class Pagina1Component {} e allora devo scrivere anche il then
  {
    path: 'pagina1',
    loadComponent: () =>
      import('./components/pages/pagina1/pagina1.component').then(
        (c) => c.Pagina1Component
      ),
  },
  // se esporto il componente 2 come export default posso evitare di scrivere il then
  {
    path: 'pagina2',
    loadComponent: () => import('./components/pages/pagina2/pagina2.component'),
  },
  {
    path: 'pagina3',
    loadComponent: () =>
      import('./components/pages/pagina3/pagina3.component').then(
        (c) => c.Pagina3Component
      ),
  },
  { path: '', redirectTo: 'pagina1', pathMatch: 'full' },
];
