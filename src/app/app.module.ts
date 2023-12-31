import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturedComponent } from './featured/featured.component';
import { ChooseComponent } from './choose/choose.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component'
import { SharedModule } from "./shared/shared.module";
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ScrollService } from './services/scroll.service';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CommentComponent } from './comment/comment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        FeaturedComponent,
        ChooseComponent,
        MenuComponent,
        ContactComponent,
        FooterComponent,
        NewsletterComponent,
        MenuPageComponent,
        NavbarComponent,
        MenuFooterComponent,
        ProductDetailComponent,
        QuantitySelectorComponent,
        ReviewComponent,
        CheckoutComponent,
        OrderComponent,
        DropdownComponent,
        ShopCartComponent,
        BlogComponent,
        BlogDetailComponent,
        CommentComponent,
        ContactUsComponent
    ],
    providers: [ScrollService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        FontAwesomeModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([], { scrollPositionRestoration: 'enabled' }),

    ],
    exports: [
        NavComponent
    ]      
})
export class AppModule { }
