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
        NewsletterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        FontAwesomeModule,
        SharedModule
    ]
})
export class AppModule { }
