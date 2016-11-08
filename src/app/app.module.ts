import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { routing } from './app.routes';
import { ExplainComponent } from './explain/explain.component';
import { MnComponent } from './mn/mn.component';
import { ByComponent } from './by/by.component';
import { StatComponent } from './stat/stat.component';
import { StatService } from './stat.service';
import { UpDownComponent } from './up-down/up-down.component';
import { RuleChoiceComponent } from './rule-choice/rule-choice.component';
import { SwedishComponent } from './swedish/swedish.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ExplainComponent,
    MnComponent,
    ByComponent,
    StatComponent,
    UpDownComponent,
    RuleChoiceComponent,
    SwedishComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    HttpModule
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
