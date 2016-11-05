import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { routing } from './app.routes';
import { ExplainComponent } from './explain/explain.component';
import { MnComponent } from './mn/mn.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ExplainComponent,
    MnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
