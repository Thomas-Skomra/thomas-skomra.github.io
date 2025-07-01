import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TimelineModule } from 'primeng/timeline';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-printable-cv',
  imports: [
    CommonModule,
    TranslatePipe,
    TimelineModule
  ],
  templateUrl: './printable-cv.html',
  styleUrl: './printable-cv.css'
})
export class PrintableCvComponent {

  experience: any[] = [];
  skillCategories: any[] = [];

  constructor(
    private translate: TranslateService,
    public languageService: LanguageService
  ) {
      this.loadTranslatedExperience();
  }

  changeLanguage(lang: any): void {
    this.languageService.changeLanguage(lang);
    this.loadTranslatedExperience();
  }

  loadTranslatedExperience(): void {
    this.translate.get('experience.jobs').subscribe((jobs: any[]) => {
      this.experience = jobs;
    });

    this.translate.get('skills.categories').subscribe((skillCategories: any[]) => {
      this.skillCategories = skillCategories;
    });
  }
}
