import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ElementListComponent } from './component/element-list/element-list.component';
import { ElementListRoutingModule } from './element-list-routing.module';

@NgModule({
  declarations: [
    ElementListComponent
  ],
  imports: [
    CommonModule,
    ElementListRoutingModule
  ]
})
export class ElementListModule { }
