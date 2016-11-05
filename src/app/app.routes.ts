import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { ExplainComponent } from './explain/explain.component';
import { MnComponent } from './mn/mn.component';
export const routes: Routes = [
  { path: '', component: ExplainComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'mn', component: MnComponent },
  { path: 'explain', component: ExplainComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
