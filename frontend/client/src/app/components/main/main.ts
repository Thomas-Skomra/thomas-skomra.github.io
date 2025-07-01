import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TimelineModule } from 'primeng/timeline';
import { LanguageService } from '../../services/language-service';
import { PrintableCvComponent } from '../printable-cv/printable-cv';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    InputSwitchModule,
    TimelineModule,
    FormsModule,
    DropdownModule,
    TranslatePipe,
    PrintableCvComponent
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent implements OnInit {
  isDarkMode = false;
  fabOpen = false;
  
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

  ngOnInit(): void {
    //this.applyTheme();
  }

  printClick(): void {
    window.print();
  }
}
