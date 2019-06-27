import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { FrameworkConfigService } from 'src/fw/services/framwork-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FwModule
  ],
  providers: [FrameworkConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
