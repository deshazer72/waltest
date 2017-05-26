import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MainComponent} from './app.main.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'main-view', pathMatch: 'full'},
      {path: 'main-view', component: MainComponent},
      { path: '**', redirectTo: '/main-view'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
