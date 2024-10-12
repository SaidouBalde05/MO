import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementListComponent } from './component/element-list/element-list.component';
    
const routes: Routes = [
    { path: '', component: ElementListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementListRoutingModule { }
