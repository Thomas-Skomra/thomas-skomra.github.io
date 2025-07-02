import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TimelineModule } from 'primeng/timeline';
import { LanguageService } from '../../services/language-service';
import { Subscription } from 'rxjs';

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
export class PrintableCvComponent implements OnInit, OnDestroy {

  @Input() isStandalone: boolean = true;
  expFontSize: number = 14
  experience: any[] = [];
  skillCategories: any[] = [];
  private languageChanged!: Subscription;

  constructor(
    private translate: TranslateService,
    public languageService: LanguageService
  ) {
    
  }

  ngOnInit() {
    this.languageChanged = this.languageService.languageChanged.subscribe((lang) => {
      this.loadTranslatedExperience();

      if (lang === 'pl') {
        this.expFontSize = 13;
      }
      else {
        this.expFontSize = 14;
      }
    });
  }

  ngOnDestroy() {
    this.languageChanged.unsubscribe();
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
