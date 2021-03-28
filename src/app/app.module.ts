import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DxSelectBoxModule} from 'devextreme-angular/ui/select-box'
import {DxTextBoxModule} from 'devextreme-angular/ui/text-box'
import {DxValidatorModule} from 'devextreme-angular/ui/validator'
import { DxNumberBoxModule }from 'devextreme-angular/ui/number-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxiValidationRuleModule } from 'devextreme-angular/ui/nested';

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
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxiValidationRuleModule,
    DxValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
