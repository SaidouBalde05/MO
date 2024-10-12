import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'elements', loadChildren: () => import('./mo-test/element-list.module').then(m => m.ElementListModule) },
    { path: '', redirectTo: 'elements', pathMatch: 'full' },
];
