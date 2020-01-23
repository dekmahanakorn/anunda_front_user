import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeTh from '@angular/common/locales/th';
import localeEn from '@angular/common/locales/en';
// import localeFrExtra from '@angular/common/locales/extra/th';

//App_base_href for Resolving "No base href set" Error when use bootstrap
import { APP_BASE_HREF } from '@angular/common';

import { RouterModule } from '@angular/router';

/* Firebase services */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './components/components.module';

registerLocaleData(localeTh, 'th');
registerLocaleData(localeEn, 'en');
console.log("AddModule");

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'th' },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
console.log('End App module');
