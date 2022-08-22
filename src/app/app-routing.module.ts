import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {BadMouseComponent} from "./mouse/bad-mouse.component";

const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'mouse', component: BadMouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
