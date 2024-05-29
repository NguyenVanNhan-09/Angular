import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
// import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: ClientComponent,
    children: [
      {
        path: 'product',
        component: ProductListComponent,
      },
    ],
  },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
