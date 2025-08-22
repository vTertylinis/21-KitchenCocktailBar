// src/app/services/translation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Record<string, { en: string; gr: string }> = {};
  private currentLang = new BehaviorSubject<'en' | 'gr'>('gr');

  lang$ = this.currentLang.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations();
  }

  setLanguage(lang: 'en' | 'gr') {
    this.currentLang.next(lang);
  }

  private loadTranslations() {
    this.http.get<Record<string, { en: string; gr: string }>>('assets/translations.json')
      .subscribe(data => {
        this.translations = data;
      });
  }

  translate(key: string): string {
    const lang = this.currentLang.value;
    return this.translations[key]?.[lang] || key;
  }
}
