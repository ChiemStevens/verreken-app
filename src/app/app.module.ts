import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxTextBoxModule,
    DxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
