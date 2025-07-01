import { Routes } from '@angular/router';
import { PrintableCvComponent } from './components/printable-cv/printable-cv';
import { MainComponent } from './components/main/main';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'printable-cv',
    component: PrintableCvComponent
  }
];
