import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TimelineModule } from 'primeng/timeline';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    InputSwitchModule,
    TimelineModule,
    FormsModule,
    DropdownModule,
    TranslatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  isDarkMode = false;
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

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'pl']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLang = this.languages.find(x => x.value === (this.translate.currentLang || this.translate.getDefaultLang() || 'en'));
  }

  changeLanguage(lang: any): void {
    this.translate.use(lang.value);
    this.currentLang = lang;
  }

  experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Cappfinity',
      location: 'Solihull, UK',
      period: 'May 2016 – July 2025',
      projectUrl: 'https://www.strengthsprofile.com',
      projectName: 'Strengths Profile',
      responsibilities: [
        'Co-architected and built StrengthsProfile platform from scratch.',
        'Implemented authentication, internal/public APIs.',
        'Developed basket system with custom discounting.',
        'Built automated accreditations & email workflows.',
        'Integrated with Mailchimp and Dotdigital.',
        'Led migration from .NET 4.6 to .NET 9 using Docker, Kubernetes, Azure DevOps.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Zeel Solutions',
      location: 'Wolverhampton, UK',
      period: 'Mar 2015 – May 2016',
      projectUrl: 'https://www.zeelsolutions.com/zeel-recruiter',
      projectName: 'Zeel Recruiter',
      responsibilities: [
        'Developed features for recruitment & CRM tools.',
        'Enhanced application performance and code quality.',
        'Introduced AngularJS into legacy Web Forms codebase.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'CT Global Freight Audit',
      location: 'Coleshill, UK',
      period: 'Aug 2014 – Feb 2015',
      projectUrl: 'https://raterequest.giv-audit.com/',
      projectName: 'Rate Track Rate Request',
      responsibilities: [
        'Created web app for logistics quote requests.',
        'Optimized T-SQL-heavy stored procedures.',
        'Worked with Web Forms, jQuery, and Telerik suite.'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Profesal Sp. z o.o.',
      location: 'Cracow, Poland',
      period: 'Jul 2013 – Jul 2014',
      projectUrl: 'https://www.profesal.pl/en/',
      projectName: 'Profesal',
      responsibilities: [
        'Built internal tools supporting CRM application dev team.',
        'Worked with .NET, WinForms, MSSQL Server, T-SQL.'
      ]
    }
  ];

  ngOnInit(): void {
    //this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  downloadPdf(): void {
    // Placeholder for PDF logic
    // You can integrate html2pdf.js or ngx-print here
    window.print();
  }
}
