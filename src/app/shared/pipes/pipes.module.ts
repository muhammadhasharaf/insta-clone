import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgo } from './timeAgoPipe';



@NgModule({
  declarations: [
    TimeAgo
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TimeAgo
  ]
})
export class PipesModule { }
