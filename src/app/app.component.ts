import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  menuVisible = true;
  selectedItem: { label: string; link: string } | null = null;
  dropdownOpen = false;

 languages: Language[] = [
  { code: 'en', flag: 'assets/flags/uk.png' },
  { code: 'gr', flag: 'assets/flags/gr.png' },
];
selectedLanguage: Language = this.languages[1];


  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {}

  // your.component.ts
  ngAfterViewInit() {
    const video = this.bgVideo?.nativeElement;
    if (video) {
      video.muted = true; // ensure muted
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked -> wait for user interaction
          document.body.addEventListener(
            'click',
            () => {
              video.play();
            },
            { once: true }
          );
        });
      }
    }
  }

  menuItems = [
    { label: 'HOME', link: '/home' },
    { label: 'ABOUT_US', link: '/about' },
    { label: 'MENU', link: '/menu' },
    { label: 'CONTACT', link: '/contact' },
  ];

  onSelect(item: { label: string; link: string }) {
    this.selectedItem = item;
    this.router.navigate([item.link]);
  }

  onLanguageChange(lang: any) {
    this.selectedLanguage = lang;
    this.translationService.setLanguage(lang.code);
    this.dropdownOpen = false; // close dropdown after selection
  }

  onLanguageToggle() {
  const currentIndex = this.languages.findIndex(
    lang => lang.code === this.selectedLanguage.code
  );
  const nextIndex = (currentIndex + 1) % this.languages.length;
  this.selectedLanguage = this.languages[nextIndex];
  // TypeScript now knows code is 'en' | 'gr'
  this.translationService.setLanguage(this.selectedLanguage.code);
}

}

type LanguageCode = 'en' | 'gr';

interface Language {
  code: LanguageCode;
  flag: string;
}