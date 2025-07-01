import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: any;

  languages = [
    {
      label: 'English',
      value: 'en',
      icon: 'gb.svg'
    },
    {
      label: 'Polski',
      value: 'pl',
      icon: 'pl.svg'
    }
  ];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pl']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLang = this.languages.find(x => x.value === (this.translate.currentLang || this.translate.getDefaultLang() || 'en'));
  }

  public changeLanguage(lang: any): void {
    this.translate.use(lang.value);
    this.currentLang = lang;
  }
}
