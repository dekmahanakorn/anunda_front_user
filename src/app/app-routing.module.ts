import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { CateIotComponent } from './components/cate-iot/cate-iot.component';
import { CateRfMicrowaveComponent } from './components/cate-rf-microwave/cate-rf-microwave.component';
import { CateRfPassiveComponent } from './components/cate-rf-passive/cate-rf-passive.component';
import { CateKioskComponent } from './components/cate-kiosk/cate-kiosk.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSoDetailComponent } from './components/product-so-detail/product-so-detail.component';
import { CallToActionDetailComponent } from './components/call-to-action-detail/call-to-action-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ComponentsComponent },
  { path: 'cate-iot', component: CateIotComponent },
  { path: 'cate-rf-microwave', component: CateRfMicrowaveComponent },
  { path: 'cate-rf-passive', component: CateRfPassiveComponent },
  { path: 'cate-kiosk', component: CateKioskComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-so-detail', component: ProductSoDetailComponent },
  { path: 'call-to-action-detail', component: CallToActionDetailComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
