import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
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
        MenuFooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        FontAwesomeModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule

    ],
    exports: [
        NavComponent
    ]
        
})
export class AppModule { }
