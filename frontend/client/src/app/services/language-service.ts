import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _languageChangedSubject: BehaviorSubject<string>;
  languageChanged;

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

    // Initialize BehaviorSubject with initial language
    this._languageChangedSubject = new BehaviorSubject<string>(this.currentLang.value);
    this.languageChanged = this._languageChangedSubject.asObservable();
  }

  public changeLanguage(lang: any): void {
    this.translate.use(lang.value);
    this.currentLang = lang;

    this._languageChangedSubject.next(lang.value);
  }
}
