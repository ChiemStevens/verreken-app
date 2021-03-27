import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxNumberBoxModule, DxResponsiveBoxModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule, DxTileViewComponent, DxTileViewModule, DxValidatorModule } from 'devextreme-angular';
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
    DxTextAreaModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxResponsiveBoxModule,
    DxTileViewModule,
    DxiValidationRuleModule,
    DxValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
