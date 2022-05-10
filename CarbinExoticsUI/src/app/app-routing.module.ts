import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { UserComponent } from './components/user/user.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'signin', component: UserComponent },
  {path: 'cars', component: CarListComponent},
  { path: '', component: ProductDetailsComponent },
  { path: 'cars/:productId', component: ProductDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component:CarListComponent },
      { path: 'cars/:car_id', component: ProductDetailsComponent },]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
