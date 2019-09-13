import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Fake3dModule } from 'projects/fake3d/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Fake3dModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
