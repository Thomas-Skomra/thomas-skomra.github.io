import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TimelineModule } from 'primeng/timeline';
import { LanguageService } from '../../services/language-service';
import { PrintableCvComponent } from '../printable-cv/printable-cv';
import { Subscription } from 'rxjs';

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
export class MainComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  fabOpen = false;

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

  printClick(): void {
    window.print();
  }
}
