import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { ExplainComponent } from './explain/explain.component';
import { MnComponent } from './mn/mn.component';
import { ByComponent } from './by/by.component';
import { StatComponent } from './stat/stat.component';
import { UpDownComponent } from './up-down/up-down.component';

export const routes: Routes = [
  { path: '', component: ExplainComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'mn', component: MnComponent },
  { path: 'by', component: ByComponent },
  { path: 'stat', component: StatComponent },
  { path: 'updown', component: UpDownComponent },
  { path: 'explain', component: ExplainComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
