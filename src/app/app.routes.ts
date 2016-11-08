import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { ExplainComponent } from './explain/explain.component';
import { MnComponent } from './mn/mn.component';
import { ByComponent } from './by/by.component';
import { StatComponent } from './stat/stat.component';
import { UpDownComponent } from './up-down/up-down.component';
import { RuleChoiceComponent } from './rule-choice/rule-choice.component';
import { SwedishComponent } from './swedish/swedish.component';

export const routes: Routes = [
  { path: '', component: ExplainComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'mn', component: MnComponent },
  { path: 'by', component: ByComponent },
  { path: 'stat', component: StatComponent },
  { path: 'updown', component: UpDownComponent },
  { path: 'swedish', component: SwedishComponent },
  { path: 'explain', component: ExplainComponent },
  { path: 'rule', component: RuleChoiceComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
