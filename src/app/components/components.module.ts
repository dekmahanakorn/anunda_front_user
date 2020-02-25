import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentsComponent } from './components.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ClientsComponent } from './clients/clients.component';
import { OutPortfolioComponent } from './out-portfolio/out-portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSoDetailComponent } from './product-so-detail/product-so-detail.component';

import { SendMessageComponent } from './contact/send-message/send-message.component';
import { ToastrModule } from 'ngx-toastr';
import { CallToActionDetailComponent } from './call-to-action-detail/call-to-action-detail.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CategoryComponent } from './category/category.component';
import { CategorySolutionsComponent } from './category-solutions/category-solutions.component';

@NgModule({
  imports: [
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    OwlModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  ],
  declarations: [
    ComponentsComponent,
    TopbarComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ServiceComponent,
    ClientsComponent,
    OutPortfolioComponent,
    TestimonialsComponent,
    CallToActionComponent,
    OurTeamComponent,
    ContactComponent,
    ProductDetailComponent,
    ProductSoDetailComponent,
    SendMessageComponent,
    CallToActionDetailComponent,
    FooterComponent,
    CategoryComponent,
    CategorySolutionsComponent
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }


