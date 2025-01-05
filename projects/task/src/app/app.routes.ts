import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    outlet: 'list',
  },
  {
    path: '',
    component: AddComponent,
    outlet: 'add',
  },
];
