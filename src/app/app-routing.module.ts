import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSoDetailComponent } from './components/product-so-detail/product-so-detail.component';
import { CallToActionDetailComponent } from './components/call-to-action-detail/call-to-action-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ComponentsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-so-detail', component: ProductSoDetailComponent },
  { path: 'call-to-action-detail', component: CallToActionDetailComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
