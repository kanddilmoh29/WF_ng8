import { TopBarComponent } from './../fw/top-bar/top-bar.component';
import { TitleBarComponent } from './../fw/title-bar/title-bar.component';
import { ContentComponent } from './../fw/content/content.component';
import { FrameworkBodyComponent } from '../fw/framework-body/framework-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent
  ],
  exports: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FwModule { }
