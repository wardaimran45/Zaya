import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo  } from '@angular/fire/compat/auth-guard'
import { AuthGuard } from './guards/auth.guard';
import { OrderComponent } from './order/order.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/')

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuPageComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'order-placed',
    component: OrderComponent,
    canActivate: [AuthGuard], 
  },
  {
    path: 'shop-cart',
    component: ShopCartComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-detail/:id',
    component: BlogDetailComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
