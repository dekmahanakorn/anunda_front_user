import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
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
    ],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }


