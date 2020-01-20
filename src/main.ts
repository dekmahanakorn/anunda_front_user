import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// localStorage.setItem('locale', 'th');
if (localStorage.getItem('locale') === null) {
  localStorage.setItem('locale', 'th');
  }
  console.log(`localStorage.getItem('locale')`,localStorage.getItem('locale'));

  const locale = localStorage.getItem('locale');
  declare const require;
  const translations = require(`raw-loader!./locale/messages.${locale}.xlf`).default;
  // const translations = require('raw-loader!./i18n/messages.ko.xlf').default;
  // console.log('translations',translations);

  if (environment.production) {
    enableProdMode();
  }
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [
      {provide: TRANSLATIONS, useValue: translations},
      {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
    ]
  })
  .catch(err => console.error(err));

});
