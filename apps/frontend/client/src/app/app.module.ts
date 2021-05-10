import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentModule } from '@svvs/ui-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
